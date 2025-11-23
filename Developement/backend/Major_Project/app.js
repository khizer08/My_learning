const express = require("express");
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");


const listingRouter=require("./routes/listing.js"); // requiring the whole "listings" related routes.
const reviewRouter=require("./routes/review.js"); // requiring the whole "reviews" related routes.
const userRouter=require("./routes/user.js"); // requiring the whole "users" related routes.


const port=8080;
const app=express();


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));

const sessionOption={// mentioning different session "options".
    secret: "mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+ 7 *24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true,// for security purpose
    },
};


//Home Page
app.get("/",(req,res)=>{
    res.send("home page");
});


app.use(session(sessionOption));// once we use this middleware ,for all routes a session default cookie will be sent to client .
app.use(flash());// flash has to be used before the routes which requires the functionality of "flash".

app.use(passport.initialize()); // middleware which initializes "passport".
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine("ejs",ejsMate);


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});


app.use("/listings",listingRouter); // using the "listingRouter" route, any route which is found in the "listings" module will default start with "/listings".
app.use("/listings/:id/reviews",reviewRouter); // // using the "reviewRouter" route, any route which is found in the "reviews" module will default start with "/reviews".
app.use("/",userRouter); // // using the "users" route, any route which is found in the "users" module will default start with "/".



//for any route that doesnt exist.
app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});


//error handling middleware.
app.use((err,req,res,next)=>{
    let{status=500,message="something went wrong"}=err;
    res.status(status).render("error.ejs",{err});
});



app.listen(port,()=>{
    console.log("server running at port",port);
});
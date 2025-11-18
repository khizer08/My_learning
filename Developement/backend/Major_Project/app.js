const express = require("express");
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");


const listings=require("./routes/listing.js"); // requiring the whole "listings" related routes.
const reviews=require("./routes/review.js"); // requiring the whole "reviews" related routes.


const port=8080;
const app=express();


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));

app.engine("ejs",ejsMate);


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


//Home Page
app.get("/",(req,res)=>{
    res.send("home page");
});


app.use("/listings",listings); // using the "listings" route, any route which is found in the "listings" module will default start with "/listings".
app.use("/listings/:id/reviews",reviews); // // using the "reviews" route, any route which is found in the "reviews" module will default start with "/reviews".


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
const express = require("express");
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const path=require("path");
const Listing=require("./models/listing.js");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js"); // schema validation by "joi" is being imported.

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


app.get("/",(req,res)=>{
    res.send("home page");
});


const validateListing=(req,res,next)=>{
    let {error} =listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",")
        throw new ExpressError(400,errMsg);
   }else{
    next();
   }
}


//Index Route
app.get("/listings",wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));


//New Route  // we kept this "new route" up wrt "show route" because if we keep "show route" upwards the "/:id" params will treat "/new" as id and search in db.
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});


// Show Route
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));


//create route
app.post("/listings",validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing); // understand "req.body.listing" [hint:- new.ejs form]
    await newListing.save();
    res.redirect("/listings");
}));


//edit route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));


// update route
app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//delete route
app.delete("/listings/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


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
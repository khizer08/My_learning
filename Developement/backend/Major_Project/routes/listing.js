const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js"); // schema validation by "joi" is being imported.
const Listing=require("../models/listing.js");


//listing schema server side validation 
const validateListing=(req,res,next)=>{
    let {error} =listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",")
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//Index Route
router.get("/",wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));


//New Route  // we kept this "new route" up wrt "show route" because if we keep "show route" upwards the "/:id" params will treat "/new" as id and search in db.
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
});


// Show Route
router.get("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));


//create route
router.post("/",validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing); // understand "req.body.listing" [hint:- new.ejs form]
    await newListing.save();
    res.redirect("/listings");
}));


//edit route
router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));


// update route
router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));



module.exports=router;
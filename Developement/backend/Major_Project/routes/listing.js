const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");


//Index Route
router.get("/",wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));


//New Route  // we kept this "new route" up wrt "show route" because if we keep "show route" upwards the "/:id" params will treat "/new" as id and search in db.
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new.ejs");
});


// Show Route
router.get("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id).populate({
        path:"reviews",
        populate:{
            path:"author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","your listing was deleted!");// key message pair.
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));


//create route
router.post("/",isLoggedIn,validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing); // understand "req.body.listing" [hint:- new.ejs form]
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash("success","New  listing created!");// key message pair.
    res.redirect("/listings");
}));


//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    if(!listing){
        req.flash("error","your listing was deleted!");// key message pair.
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));


// update route
router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","listing updated!");// key message pair.
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","listing deleted!");// key message pair.
    res.redirect("/listings");
}));



module.exports=router;
const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js"); // why we need "listing schema"? . because we are using "reviews" inside "listings".
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");


//reviews post route
router.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    let listing= await Listing.findById(req.params.id)
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","new review created!");// key message pair.
    res.redirect(`/listings/${listing._id}`);
}));


//reviews delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted!");// key message pair.
    res.redirect(`/listings/${id}`);
}));


module.exports=router;
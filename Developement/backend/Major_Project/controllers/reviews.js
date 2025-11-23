const Listing=require("../models/listing");
const Review=require("../models/review.js");


module.exports.createReview=async(req,res)=>{// this module is used to create new review for the particular listing.
    let listing= await Listing.findById(req.params.id)
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","new review created!");// key message pair.
    res.redirect(`/listings/${listing._id}`);
};


module.exports.destroyReview=async(req,res)=>{//this module is used to delete a particular listing's Review.
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted!");// key message pair.
    res.redirect(`/listings/${id}`);
};
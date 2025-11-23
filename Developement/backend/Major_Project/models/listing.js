const mongoose=require("mongoose");
const Schema=mongoose.Schema;// just so that we need to write "mongoose.Schema" often.
const Review=require("./review.js");


const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default: "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
        set : (v) => v === "" ? "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlyYm5ifGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000" : v,

    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
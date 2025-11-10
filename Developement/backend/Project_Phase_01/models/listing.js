const mongoose=require("mongoose");
const Schema=mongoose.Schema;

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
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
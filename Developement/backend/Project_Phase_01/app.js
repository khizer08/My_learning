const express = require("express");
const path=require("path");
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");


const port=8080;
const app=express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));



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

//Index Route
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

// Show Route
app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});


// app.get("/testListing",async (req,res)=>{
//     let sampleListing=new Listing ({
//         title:"my new villa",
//         description:"by the beach",
//         price:1200,
//         location:"calangute goa",
//         country:"india",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
    
// });


app.listen(port,()=>{
    console.log("server running at port",port);
});
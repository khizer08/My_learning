const express=require('express');
const path=require("path");
const app=express();

const port=8080;

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})


app.listen(port,()=>{
    console.log("server is running on port 3000");
});

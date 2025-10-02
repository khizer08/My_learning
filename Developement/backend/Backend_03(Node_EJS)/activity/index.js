const express=require("express");
const path=require("path");

const app=express();

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");// json file acts as database here.
    let data=instaData[username];//fetching only which page we want.
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }

});

app.listen(port,()=>{
    console.log(`the server is running at port ${port}`);
});
const express=require('express');
const path=require("path"); // for setting path we required "path" package. 
const app=express();

const port=8080;

app.set("views",path.join(__dirname,"/views")); // telling where the "views" folder/directory will be present.
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    const diceVal=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal});
});

app.get("/ig/:username",(req,res)=>{
    const {username}=req.params;
    const followers=["huehue","dogesh","meow"];
    res.render("instagram.ejs",{username,followers});
});


app.listen(port,()=>{
    console.log("server is running on port 3000!");
});

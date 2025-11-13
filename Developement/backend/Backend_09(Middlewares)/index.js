const express=require("express");

const port=8080;
const app=express();


//Middleware response
app.use((req,res)=>{
    res.send("hii iam middleware");
});


app.get("/",(req,res)=>{
    res.send("hii, iam root");
});

app.get("/random",(req,res)=>{
    res.send("hii this is a random page");
});

app.listen(port,()=>{
    console.log("server running at port ",port);
});
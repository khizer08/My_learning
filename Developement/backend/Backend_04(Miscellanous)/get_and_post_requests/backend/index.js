const express=require("express");
const path=require("path");

const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));// both these lines are used because "post" request gives data 
// in the body property and express cannot recongnise it , so to encode we use this. 
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query; // accessing information of the "GET" response from the "QueryString".
    res.send(`Standard GET response , Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body; //accessing information of the "POST" response from the "body property of req".
    res.send(`Standard POST response,Welcome ${user}`);
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})
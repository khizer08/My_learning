const express=require("express");

const port=8080;
const app=express();


//Middleware response
//logger
// app.use((req,res,next)=>{
//     // res.send("hii iam middleware");
//     res.time= Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });


// example of middleware in authentication
const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="access"){
        next();
    }
    else{
        throw new Error("ACCESS DENIED!"); // customize error
    }
});
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
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
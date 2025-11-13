const express=require("express");
const ExpressError=require("./ExpressError");
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
        throw new ExpressError(401,"ACCESS DENIED!"); // customize error
    }
});
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});



app.get("/",(req,res)=>{
    res.send("hii, iam root");
});

// error page
app.get("/random",(req,res)=>{
    abc=abc;
});


//activity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
});


// if none of the request meet this will execute.
app.use((req,res)=>{
    res.send("page not found");
});


// custom error handling
app.use((err,req,res,next)=>{
    let{status=500,message="some error"}=err;
    res.status(status).send(message);    
});


app.listen(port,()=>{
    console.log("server running at port ",port);
});
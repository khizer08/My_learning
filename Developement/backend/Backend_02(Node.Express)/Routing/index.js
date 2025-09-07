const express=require("express");

const app=express();  

let port=8080;

app.listen(port,()=>{  
    console.log(`the server is listening ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received");

//     res.send("response send");
// });
// while using 'use' method we dont get error if the path doesnt exists

app.get("/",(req,res)=>{
    res.send("response send to root path");
});
app.get("/apple",(req,res)=>{
    res.send("response send to apple path");
});
app.get("/orange",(req,res)=>{
    res.send("response send to orange path");
});

app.use((req, res) => {
  res.status(404).send("Page not found");// valid for all methods if path is invalid
});



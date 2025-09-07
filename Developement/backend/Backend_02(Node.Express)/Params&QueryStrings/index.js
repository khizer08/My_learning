const express=require("express");

const app=express();  

let port=8080;

app.listen(port,()=>{  
    console.log(`the server is listening ${port}`);
});

app.get("/",(req,res)=>{
    res.send("response send to root path");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlStr=`<h1>welcome to the page of @${username} and id is${id}</h1>`; // params
    res.send(htmlStr);
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send(`<h1>page not searched</h1>`)
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
})
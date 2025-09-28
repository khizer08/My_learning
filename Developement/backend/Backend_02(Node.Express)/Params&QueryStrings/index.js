const express=require("express");

const app=express();  

const port=8080;

app.listen(port,()=>{  
    console.log(`the server is listening ${port}`);
});

app.get("/",(req,res)=>{
    res.send("response send to root path");
});

app.get("/:username/:id",(req,res)=>{ // username and id is variables which holds values what is sent in the url
    let {username,id}=req.params;
    let htmlStr=`<h1>welcome to the page of @${username} and id is${id}</h1>`; // params
    res.send(htmlStr);
});

app.get("/search",(req,res)=>{ // query string , in url after /search?q= "what ever is written in this string" will be fetched.
    // do remember "/search" can be anything but we named this route name as "search".
    // "query parameter" could be anything but we named it as
    let {q}=req.query;
    if(!q){
        res.send(`<h1>page not searched</h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});

app.get(/.*/, (req, res) => {
    let code ="<h1>Page not exist!</h1>";
    res.status(404).send(code);
});

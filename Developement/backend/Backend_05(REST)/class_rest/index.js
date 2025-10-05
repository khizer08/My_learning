const express=require("express");
const path=require("path");
const { v4: uuidv4 }=require('uuid');// to generate random "id".
const methodOverride=require("method-override");// to override the post as "delete" or "patch" or "put".

const port =8080;
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


let posts=[
    {
        id:uuidv4(),
        username:"khizer",
        content:"full stack dev"
    },
    {
        id:uuidv4(),
        username:"syed",
        content:"ml upcoming"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}); // home page.
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs"); // form page.
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content}); // takes the form information and pushes to the array.
    res.redirect("/posts");// once clicked "submit post" redirects to "home".
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params; // will take "id" in url.
    let post=posts.find((p)=>id===p.id); // checks if post exist on that "id".
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} =req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id} =req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("server listening at port",port);
});
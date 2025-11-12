const express = require("express");
const path=require("path");
const methodOverride=require("method-override");
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");// this folder is created by us.

const port=8080;
const app=express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// home route
app.get("/",(req,res)=>{
    res.render("home.ejs");
});


// all chats route
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("allChats.ejs",{chats});
});


// newchat route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
});


// newchat (db) route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });

    newChat.save()
    .then((res)=>{
        console.log("chat was saved")
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});


// edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});


//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body; // do remember how data is coming from body.
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});


//destroy route
app.delete("/chats/:id",async (req,res)=>{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


app.listen(port,()=>{
    console.log("port listening to",port);
});
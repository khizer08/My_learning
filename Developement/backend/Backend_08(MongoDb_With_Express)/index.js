const express = require("express");
const path=require("path");
const methodOverride=require("method-override");
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");// this folder is created by us.
const ExpressError=require("./ExpressError.js");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


// home route
app.get("/",(req,res)=>{
    res.render("home.ejs");
});


// all chats route
app.get("/chats",asyncWrap(async (req,res)=>{
    let chats=await Chat.find();
    res.render("allChats.ejs",{chats});
}));


// newchat route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(401,"unathorized"); // as it is not "async" we can handle the error easily
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



function asyncWrap(fn){ // function to handle errors for "async functions" (better way) 
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}

//NEW -SHOW ROUTE
app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
        next(new ExpressError(401,"chat not found"));
        // throw new ExpressError(500,"chat not found"); // from "express 5 version onewards this will also work".
    }
    res.render("edit.ejs",{chat});
}));


// edit route
app.get("/chats/:id/edit",asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
}));


//update route
app.put("/chats/:id",asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body; // do remember how data is coming from body.
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));


//destroy route
app.delete("/chats/:id",asyncWrap(async (req,res)=>{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));


//Error handling Middleware
app.use((err,req,res,next)=>{
    let{status=500,message="some error occured"}=err;
    res.status(status).send(message);
});

app.listen(port,()=>{
    console.log("port listening to",port);
});
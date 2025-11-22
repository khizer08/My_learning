const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");

// SignUp GET route 
router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

// SignUp POST route 
router.post("/signup",wrapAsync(async(req,res)=>{
    try{
        let{username,email,password}=req.body;
        const newUser =new User({email,username});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
}));


// Login GET route 
router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

// Login POST route 
router.post("/login",passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),wrapAsync(async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust");
    res.redirect("/listings");
}));


module.exports=router;
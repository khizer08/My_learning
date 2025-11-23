const User=require("../models/user.js");


module.exports.renderSignupForm=(req,res)=>{// this module is used to render a form so that a user can make their account.
    res.render("users/signup.ejs");
};


module.exports.signup=async(req,res,next)=>{// this module saves the user details in database and displays correct flash message.
    try{
        let{username,email,password}=req.body;
        const newUser =new User({email,username});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust");
            res.redirect("/listings");
        });
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
};


module.exports.renderLoginForm=(req,res)=>{// this module is used to render a login form so that a user can login.
    res.render("users/login.ejs");
};


module.exports.login=async(req,res)=>{// this module decides after login what actions to be taken.
    req.flash("success","Welcome back to Wanderlust");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};


module.exports.logout=(req,res,next)=>{//this module is used to logout the particular user.
    req.logout((err)=>{ //"req.logout" method is used to logged out the user in the session.
        if(err){
            return next(err);
        }
        req.flash("success","logged out!");
        res.redirect("/listings");
    });
};
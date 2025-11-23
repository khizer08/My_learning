module.exports.isLoggedIn=(req,res,next)=>{
        if(!req.isAuthenticated()){ // "isAuthenticated" is the method which is used to check weather user exists or not.
        req.flash("error","you must be logged in!");
        return res.redirect("/login");
    }
    next();
}
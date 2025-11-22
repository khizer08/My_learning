const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose);// "plugin" automatically creates "username,salting,hashing" for us.

module.exports = mongoose.model('User', userSchema);


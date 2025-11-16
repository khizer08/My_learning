const mongoose=require("mongoose");
const Schema=mongoose.Schema;

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


//user Schema
const userSchema = new Schema({
    username:
    {
        type:String,
    },
    email:{
        type:String,
    },
});


//posts Schema
const postSchema = new Schema({
    content:
    {
        type:String,
    },
    likes:{
        type:Number,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});


const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);


const addData=async()=>{
    // let user=new User({
    //     username:"owaise",
    //     email:"owaise@gmail.com"
    // });

    // above is commented because "user" is made.
    let user=await User.findOne({username:"owaise"});

    let post2=new Post({
        content:"hello world bye bye!",
        likes:99
    });

    post2.user=user;

    // await user1.save();
    await post2.save();
}

addData();
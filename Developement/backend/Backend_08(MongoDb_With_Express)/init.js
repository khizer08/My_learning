const mongoose = require('mongoose');
const Chat=require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


let allChats=[
    {
    from:"neha",
    to:"rohan",
    msg:"send me your exam sheets",
    created_at:new Date(),
   },
    {
    from:"syed",
    to:"khizer",
    msg:"huehue",
    created_at:new Date(),
   },
    {
    from:"mohan",
    to:"rohit",
    msg:"holla",
    created_at:new Date(),
   },
    {
    from:"python",
    to:"java",
    msg:"hello world",
    created_at:new Date(),
   },
   
];

Chat.insertMany(allChats);
const mongoose = require('mongoose');

main()// function which returns "promise" we can make use of "then to get result" and "catch to get error".
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() { // as "main() is a async function " it returns "promise" .
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
} 
// the above lines are from "mongoosejs.com".

const userSchema=new mongoose.Schema({ // this is called "Schema".
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema); // "model" creation.

User.find({}).then((res)=>{// implementing "find method"
  console.log(res);
}).catch((err)=>{
  console.log(err);
});


// User.insertMany([ // inserting many documents at a time.
//   {name:"tony",email:"tony@gmail.com",age:50},
//   {name:"peter",email:"peter@gmail.com",age:40},
//   {name:"bruce",email:"bruce@gmail.com",age:30},
// ]).then((res)=>{
//   console.log(res);
// });


// const user2= new User({ // inserting single document at a time (save b krna hai).
//   name:"eve",
//   email:"eve@yahoo.com",
//   age:48,
// });

// user2
// .save() // "save()" is a async function which returns promise.
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// }); 
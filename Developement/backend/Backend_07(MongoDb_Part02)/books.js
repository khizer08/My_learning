const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() { 
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookschema=new mongoose.Schema({
    title:{
        type:String,
        required:true, // sql ka "not null"
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"price is too low for amazon selling"], // making custom error.
    },
});

const Book= mongoose.model("Book",bookschema);

// let book1=new Book({
//     title:"Mathematics XII",
//     author:"RD sharma",
//     price:3999,
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


Book.findByIdAndUpdate("690f4cbe7b8892f8540ad853",{price:-100},{runValidators:true}) //making such that the "validation" works even during "updation".
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message); // fetching the custom error message.
});


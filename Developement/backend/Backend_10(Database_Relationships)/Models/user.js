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


const userSchema = new Schema({
    username:{
        type:String,
    },
    addresses:[
        {
            _id:false, // "mongodb" thinks this is different document an creates "id" for each address , to avoid it this line. 
            location:{
                type:String,
            },
            city:{
                type:String,
            },
        },
    ],
});


const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:"khizer",
        addresses:[{
            location:"karnataka",
            city:"bengaluru",
        }],
    });
    user1.addresses.push({location:"maharashtra",city:"mumbai"});
    let result= await user1.save();
    console.log(result);
}

addUsers();
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


//Order Schema
const orderSchema = new Schema({
    item:
    {
        type:String,
    },
    price:{
        type:Number,
    },
});


// Customer Schema
const customerSchema=new Schema({
    name:{
        type:String,
    },
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order", // "ref" is use to point from which "collection" we are taking it. 
        },
    ]
});

//Order model
const Order=mongoose.model("Order",orderSchema);
//Customer model
const Customer=mongoose.model("Customer",customerSchema);


// Order data insertion
// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:"Samosa",price:12},
//         {item:"Chips",price:10},
//         {item:"chocolate",price:40},
//     ]);
//     console.log(res);
// };
// addOrders();


// Customer data insertion
const addCustomer=async()=>{
    // let cust1=new Customer({
    //     name:"khizer",
    // });

    // let order1=await Order.findOne({item:"Chips"});
    // let order2=await Order.findOne({item:"chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let res=await cust1.save();
    // console.log(res);

    // the code above was used to insertdata so commented out.
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};
addCustomer();
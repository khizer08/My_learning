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


//Order Schema (child)
const orderSchema = new Schema({
    item:
    {
        type:String,
    },
    price:{
        type:Number,
    },
});


// Customer Schema (parent)
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


// pre post middlewares of mongoosh to handle deletion of interrelated collections

customerSchema.pre("findOneAndDelete",async()=>{
    console.log("pre middleware");
});

customerSchema.post("findOneAndDelete",async(customers)=>{ // here "customers" is a parameter which can be of any name, and it is representing "customers" collection.
    if(customers.orders.length){
    let res=await Order.deleteMany({_id: {$in: customers.orders}});
    console.log(res);
    }
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
// addCustomer();


// deletion of customer along with his/her orders
const addCust=async()=>{
    let newCust=new Customer({
        name:"karan arjun"
    });
    let newOrder=new Order({
        item:"pizza",
        price:250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};
// addCust();


const delCust=async()=>{
    let data=await Customer.findByIdAndDelete("691acd79eecd73c33465fce7");
    console.log(data);
}
delCust();

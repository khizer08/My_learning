const express=require("express");

const app=express();  // express() is a function which exist in the express module
console.dir(app); // app is an object

let port=8080;

app.listen(port,()=>{  // listen is a method of app object which accepts two parameter(port,callback)
    console.log(`the server is listening ${port}`);
});

app.use((req,res)=>{
    console.log("request received");

    res.send("response send"); // send is use to send response
});
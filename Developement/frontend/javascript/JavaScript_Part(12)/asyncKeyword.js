async function greet(){
    return "syed khizer";
}
greet()
.then((result)=>{
    console.log("promised successful");
    console.log(result);
})
.catch((error)=>{
    console.log("promised failed");
    console.log(error);
})
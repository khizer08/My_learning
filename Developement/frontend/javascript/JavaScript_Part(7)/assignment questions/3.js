// answer will be undefined because the way "function call [object.logMessage]"
const object={
    message:"hello world",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,2000);


// now it will work
const object2={
    message2:"hello world",
    logMessage2(){
        console.log(this.message2);
    }
};

setTimeout(()=>{
    object2.logMessage2()
},3000);
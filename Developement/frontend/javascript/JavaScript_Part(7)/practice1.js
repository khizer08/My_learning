//arrow function that gives square pf "n"
const square=(n)=>{
    console.log(n**2);
};
let n=Number(prompt("Enter the value of n: "));
square(n);



// function that prints "hello world" every 2secs intervals

let id =setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);
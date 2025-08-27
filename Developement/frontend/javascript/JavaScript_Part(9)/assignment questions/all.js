// Q1.

let input=document.createElement("input");
let button=document.createElement("button");

button.innerText="Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


// Q2.

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

// Q3.

let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");

// Q4.

let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("h1-class");
document.querySelector("body").append(h1);

// Q5.

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);

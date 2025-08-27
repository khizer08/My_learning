// i)
let para=document.createElement("p");
para.innerText="Hey i'm red!";
document.querySelector("body").append(para);
para.classList.add("p-text");

// ii)
let h3=document.createElement("h3");
h3.innerText="Hey i'm blue h3";
document.querySelector("body").append(h3);
h3.classList.add("h3-text");

// iii)
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="ME TOO!";

div.append(h1);
div.append(para2);

div.classList.add("div-class");
h1.classList.add("h1-class");
para2.classList.add("para2-class");


document.querySelector("body").append(div);


let btn=document.querySelector("button");
let p=document.querySelector("p");

function colorChange(){
    this.style.backgroundColor='red';
    this.innerText="huehue";
}

btn.addEventListener("click",colorChange);
p.addEventListener("click",colorChange);
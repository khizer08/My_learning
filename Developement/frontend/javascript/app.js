let input=document.querySelector("input");

input.addEventListener("input",function(){
    let h1=document.querySelector("h1");
    h1.innerText=input.value;
})
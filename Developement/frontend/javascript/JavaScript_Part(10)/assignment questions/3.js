let input=document.querySelector("input");
let h2=document.querySelector("h2");

input.addEventListener("input",function(){
    let filtered = input.value.replace(/[^a-zA-Z ]/g, "");  // any charcter that is not a-z,A-Z," "(space) should be replaced by ""(empty string)
    input.value=filtered;
    h2.innerText=filtered;
})
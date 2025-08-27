let input=document.querySelector("input");
let ul=document.querySelector("ul");
let button=document.querySelector("button");

button.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    ul.appendChild(li);
    li.appendChild(delBtn);
    input.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitems=event.target.parentElement;
        listitems.remove();
    }
});


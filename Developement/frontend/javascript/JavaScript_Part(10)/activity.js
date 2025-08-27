let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h1=document.querySelector('h1');
    let randomColor=getColor();
    h1.innerText=randomColor;

    
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
});


function getColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let black=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${black})`;
    return color;
}
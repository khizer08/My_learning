let h1=document.querySelector("h1");

function name(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed to",color);
        },delay);
    })
}

async function call(){
    await name("red",1000);
    await name("orange",1000);
    await name("purple",1000);
    await name("blue",1000); 
}
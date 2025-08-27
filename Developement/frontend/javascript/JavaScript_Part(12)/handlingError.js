let h1=document.querySelector("h1");

function name(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>8){
                reject("promise rejected");
            }

            h1.style.color=color;
            console.log("your color is: ",color);
            resolve("promised resolved");
        },delay);
    })
}

async function call(){
    try{
        await name("red",1000);
        await name("orange",1000);
        await name("purple",1000);
        await name("blue",1000); 
    }
    catch(err){
        console.log(err);
    }

}
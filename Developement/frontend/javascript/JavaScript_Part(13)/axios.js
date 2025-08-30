let url= "https://catfact.ninja/fact";

let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",async function(){
    let result= await getFacts();
    console.log(result);
    p.innerText=result;
})

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error-",e);
        return "no fact found";
    }
}

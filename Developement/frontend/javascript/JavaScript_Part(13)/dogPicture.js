let url = "https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
let img=document.querySelector("img");

btn.addEventListener("click",async ()=>{
    let link=await getImg();
    img.setAttribute("src",link);
})

async function getImg(){
    try{
        let res= await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log(e);
    }

}

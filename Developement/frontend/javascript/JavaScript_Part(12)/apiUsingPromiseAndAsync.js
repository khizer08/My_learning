let url= "https://catfact.ninja/fact";

async function getData(){
    try{
        let rep=await fetch(url);
        let data=await rep.json();
        console.log(data.fact);
    }
    catch(e){
        console.log(e);
    }
}
getData();

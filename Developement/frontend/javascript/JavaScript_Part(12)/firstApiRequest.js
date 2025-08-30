let url= "https://catfact.ninja/fact";

fetch(url) // Fetch gives/returns promise

.then((resp)=>{
    console.log(resp);
    return resp.json(); 
})
.then((data)=>{
    console.log(data);
    console.log("Facts about cats",data.fact);
})
.catch((err)=>{
    console.log("Error -",err);
})
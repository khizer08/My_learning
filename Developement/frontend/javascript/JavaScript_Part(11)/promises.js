function saveTodb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=(Math.floor(Math.random()*10)+1);
        if(internetSpeed>4){
            resolve("data was stored");
        }else{
            reject("data was not saved");
        }
    })
}

saveTodb("khizer")
.then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return saveTodb("khizer2");
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result);
    return saveTodb("khizer3")
})
.then((result)=>{
    console.log(result);
    console.log("data3 saved");
})
.catch((error)=>{
    console.log("rejected");
    console.log(error);
})

// very intresting concept , understand. :)
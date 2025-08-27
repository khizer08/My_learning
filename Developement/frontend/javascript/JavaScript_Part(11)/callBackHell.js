// let h1=document.querySelector("h1");

// function changeColor(color,delay,change){
//     setTimeout(()=>{
//         h1.style.color=color;
//         change();
//     },delay);
// };

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("purple",1000);
//         });
//     });
// });


// using promises:-

let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color was changed");
        },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("color was changed to red");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("color was changed to yellow");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("color was changed to orange");
    return changeColor("purple",1000);
})
.then(()=>{
    console.log("color was changed to purple");
    return changeColor("black",1000);
})
let text=document.querySelector("textarea");

text.addEventListener("keydown",function(event){
    if(event.code=="KeyD"){
        console.log("moving right");
    }else if(event.code=="KeyA"){
        console.log("moving left");
    }else if(event.code=="KeyW"){
        console.log("moving forward");
    }else if(event.code=="KeyS"){
        console.log("moving backward");
    }

})
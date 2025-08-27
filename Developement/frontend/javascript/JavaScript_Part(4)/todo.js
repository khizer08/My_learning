let todo=[];
while(true){
    let req=prompt("Enter your request: ");
    if(req==="quit"){
        console.log("Quitting TO-DO App");
        break;
    }
    if(req==="list"){
        console.log("~~~~~~");
        for(i=0;i<todo.length;i++){
            console.log(todo[i]);
        }
        console.log("~~~~~~");
    }else if(req==="add"){
        let task=prompt("Enter the Task");
        todo.push(task);
        console.log("Task Added");
    }else if(req==="delete"){
        let ind=prompt("Enter The Index");
        todo.splice(ind,1);
        console.log("Task Deleted");
    }else{
        console.log("Wrong Input!!!");
    }
}
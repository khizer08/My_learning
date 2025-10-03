class mammal{
    constructor(name){
        this.name=name;
        this.type="iam warm blooded";
    }
    eat(){
        console.log("i eat like mammal");
    }
}

class dog extends mammal{
    constructor(name){
        super(name);
    }

    eat(){
        console.log("iam dog and i eat different "); // this eat function "overrides" the eat function of mammal.
    }

    bark(){
        console.log("whoofff...");
    }
}

class cat extends mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow....");
    }
}

let dog1=new dog("tommy");
let cat1=new cat("angel");
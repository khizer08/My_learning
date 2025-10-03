class personMaker{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hii my name is ${name} and my age is ${age}`);
    }
}

let p1=new personMaker("khizer",21);
let p2=new personMaker("syed",21);
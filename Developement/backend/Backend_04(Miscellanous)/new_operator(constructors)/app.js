function personMaker(name,age){
    this.name=name; // each "object(p1,p2...)" created will point seperately for "name" and "age" variable.
    this.age=age;
}

personMaker.prototype.talk=function(){
    console.log(`hii, my name is ${name} and my age is ${age}`); // each "object(p1,p2...)" created will point same location
    //  for "talk" function.
}

let p1=new personMaker("khizer",21);
let p2=new personMaker("syed",22);
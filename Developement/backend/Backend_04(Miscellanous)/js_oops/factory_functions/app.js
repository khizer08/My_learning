function personMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log("hii my name is",this.name);
        },
    };
    return person;
}

let p1=personMaker("khizer",25);
console.log(p1);
let p2=personMaker("syed",22);
console.log(p2);

// OUTPUT
// {name: 'khizer', age: 25, talk: ƒ}
// {name: 'syed', age: 22, talk: ƒ}

// p1.talk===p2.talk
// false

// p1.age===p2.age
// false

// p1.__proto__===p2.__proto__ // this is built in property
// true

// even though we are using "factory function" if we use methods of that function
// each "object" creates copy and doesn't point to same.
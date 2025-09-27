//first
let arr1=["january","july","march","august"];
arr1.splice(0,2,"july","june");
console.log(arr1);

//second
let arr2=["c","c++","html","javascript","python","java","c#","sql"];
console.log(arr2);
index=arr2.indexOf("javascript");
console.log(`the index of string "javascript" before reverse is ${index}`);
arr2.reverse();
console.log(arr2);
index=arr2.indexOf("javascript");
console.log(`the index of string "javascript" after reverse is ${index}`);
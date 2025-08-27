let sum=54; // Global Scope

function calSum(a,b){
    let sum=a+b;  // Function Scope
    console.log(sum)
}

calSum(1,2);
console.log(sum);

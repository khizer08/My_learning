let nums=[1,2,3,4,5];
let square=nums.map((el)=>{
    return el**2;
});
let sum=square.reduce((res,ele)=>{
    return res+ele;
});
let avg=sum/nums.length;
console.log(avg);
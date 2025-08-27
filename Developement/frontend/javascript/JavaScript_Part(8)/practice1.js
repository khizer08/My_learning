// to check all numbers in the array are multiple of 10 or not

let arr=[10,20,30,40,3];
let answer=arr.every((ele)=>{
    return ele%10===0;    
});
if(answer==true){
    console.log("yes all elements are multiple of 10");
}else{
    console.log("no not all elements are multiple of 10");
}


//function to find min number in an array

let arr2=[1,2,3,4,5,6,7,8,9,-7];
let answer2=arr2.reduce((res,ele)=>{
    if(res>ele){
        return ele;
    }else{
        return res;
    }
});
console.log(answer2);
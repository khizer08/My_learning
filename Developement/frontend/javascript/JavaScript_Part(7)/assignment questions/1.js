let arr1=[1,2,3,4,5,6,7];
const arrayAverage=(arr1)=>{
    let element=0;
    for(i=0;i<=arr1.length;i++){
        element+=i;
    }
    console.log(element/arr1.length);
}
arrayAverage(arr1);
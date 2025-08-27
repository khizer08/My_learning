let arr1=["syed"," khizer"," is"," upcoming"," developer"];
function stringConcat(arr1){
    let result="";
    for(i=0;i<arr1.length;i++){
        result+=arr1[i];
    }
    return result;
}
console.log(stringConcat(arr1));
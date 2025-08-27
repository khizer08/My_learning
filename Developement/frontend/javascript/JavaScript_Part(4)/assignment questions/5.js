let arr1=[22,45,67,89,988,1007,300];
largest=0;
for(i=0;i<arr1.length;i++){
    if(largest<arr1[i]){
        largest=arr1[i];
    }
}
console.log(largest);
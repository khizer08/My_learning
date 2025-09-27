let arr1=[1,2,3,4,5,67,22,2,1,4,3,2,4,2];
console.log(arr1.length);
let num=prompt("Enter the number you want to delete");
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==num){
        arr1.splice(i,1);
    }
}
console.log(arr1);
// this program will delete all occurance of that number "num"
let num=prompt("Enter the number");
sum=0;
for(i=0;i<num.length;i++){
    sum=sum+Number(num[i]);
}
console.log(`The sum of ${num} is ${sum}`);
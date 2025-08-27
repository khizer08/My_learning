function tables(num){
    for(i=1;i<=10;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
let num=prompt("Enter the table you want to print");
tables(num);
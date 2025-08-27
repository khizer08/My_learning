let num1=prompt("Enter the first number: ");
let num2=prompt("Enter the second number: ");
let num3=prompt("Enter the third number: ");
if((num1>num2) && (num1>num3)){
    console.log("First number is greatest");
}
else if((num2>num1)&&(num2>num3)){
    console.log("Second number is greatest");
}
else if((num3>num1) && (num3>num2)){
    console.log("Third number is greatest");
}
else{
    console.log("Invalid input!!!");
}

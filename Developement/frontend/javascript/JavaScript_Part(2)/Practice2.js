let size=prompt("enter the size(xl,l,m,s): ");
size=size.toLowerCase();
if(size=="xl"){
    console.log("The price is 250");
}
else if(size=="l"){
    console.log("The price is 200");
}
else if(size=="m"){
    console.log("The price is 100");
}
else if(size=="s"){
    console.log("The price is 50");
}
else{
    console.log("Enter the valid size");
}
let str=prompt("enter the string");
function vowelFinder(){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count+=1;
        }
    }
    console.log(`your string has ${count} vowel`);
}
vowelFinder();
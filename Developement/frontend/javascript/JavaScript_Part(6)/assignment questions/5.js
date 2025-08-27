function randomNum(){
    let initialNum=Number(prompt("Enter the Initial number"));
    let maxNum=Number(prompt("Enter the Max number"));
    const random=Math.floor(Math.random()*maxNum)+(initialNum);
    console.log(random);
}
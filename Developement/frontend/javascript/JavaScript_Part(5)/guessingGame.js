let initialNum=prompt("Enter the Initial number (The game will depend on Initail number - Max number)");
let maxNum=prompt("Enter the Max number (The game will depend on Initail number - Max number)");
const random=Math.floor(Math.random()*maxNum)+Number(initialNum);
let guessNum=prompt(`Guess the number between ${initialNum} to ${maxNum}... type 'quit' to Quit the game`);
while(true){
    if(guessNum=="quit"){
    console.log("You quit!!!");
    break;
    }
    
    if(guessNum==random){
    console.log("You are right... Congratulations");
    break;
    }else if(guessNum<random){
        guessNum=prompt(`Your guess is small ... try again or type 'quit' to Quit the game`);
    }else if(guessNum>random){
        guessNum=prompt(`Your guess is large ... try again or type 'quit' to Quit the game`);
    }
}

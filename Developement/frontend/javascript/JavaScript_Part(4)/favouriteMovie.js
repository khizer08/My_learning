let movie="animal";
let guess=prompt("Enter Your Guess (guess my favourite mivie :) ): ");
while((guess != movie && guess != "quit")){
    guess=prompt(" Wrong Guess Try Again Or Type 'quit' To Quit: ");
}
if(guess===movie){
    console.log("Right Guess!!!!");
}else{
    console.log("You Quit")
}
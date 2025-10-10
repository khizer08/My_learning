let text = "I have 2 apples, 15 oranges, and 123 bananas.";

// Regular expression to match all numbers
let numberRegex = /\d+/g;

// Use match() to find all numbers
let numbers = text.match(numberRegex);

console.log("Numbers found:", numbers);

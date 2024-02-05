/* let reverseString = function (str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};

console.log(reverseString("LaunchCode"));

let f1 = function(string) {
  return string + string;
};

console.log(f1("abcd"));
let f2 = f1;
console.log(f2("abcd"));

let logger = function(errorMessage) {
  console.log("ERROR: " + errorMessage);
};
let input = require("readline-sync");
let userInput = input.question("Insert number: ")
if (userInput < 0) {
  logger("Invalid input");
}

function printMessage() {
  console.log("The future is now!");
}

setTimeout(printMessage, 5000); */
/* 
let nums = [3.14, 42, 4811];

let timesTwo = function(n) {
  return n*2;
};
console.log("nums run 1: ", nums);

let doubled = nums.map(timesTwo);

console.log("nums run 2: ", nums);
console.log("doubled: ", doubled);

console.log("nums map", nums.map(timesTwo));

console.log("is nums modified? ", nums);

console.log ("anonymous map calling with function")

numsStorage = [];
let doubled2 = nums.map(function(n) {
  
  return n*2;
});

let halved = nums.map(function(n) {
  return n/2;
});


console.log("anonymous map double: ", doubled)

console.log("halving maps: ", halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let firstInitials = names.map(function(n){
  return n[0]+n[n.length - 1];
})

console.log(firstInitials);

const input = require('readline-sync');

function getValidInput(prompt, isValid) {
  let userInput = input.question(prompt);

  while(!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
  }

  return userInput;
}

let isEven = function(n) {
  return Number(n) % 2 === 0;
}; */

/* console.log(getValidInput("Enter an even number: ", isEven));

function callMe(func) {
  func();
}

callMe("Al"); */

function add (a, b) {
  let result = a + b;
  while (result < 20) {
    result = add(a,b);
  }
  return result;
}

console.log (add(1,1));
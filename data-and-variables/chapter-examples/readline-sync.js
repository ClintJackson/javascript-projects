const input = require('readline-sync');

// let info = input.question("Please enter your name: ");
/*
let firstName = input.question("Enter First Name: ");
let lastName = input.question("Enter last name: ");

console.log ("Welcome, " + firstName + " " + lastName + "!");
*/
let num1 = Number(input.question("Input a number: "));
let num2 = Number(input.question("Input another number: "));
//this input function treats all inputs as strings. Must use Number() function.
console.log (num1 + num2);

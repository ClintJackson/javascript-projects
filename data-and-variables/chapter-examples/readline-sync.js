/*
const input = require('readline-sync');

let info = input.question("Please enter your name: ");

let firstName = input.question("Enter First Name: ");
let lastName = input.question("Enter last name: ");

console.log ("Welcome, " + firstName + " " + lastName + "!");
console.log (typeof firstName);
let num1 = Number(input.question("Input a number: "));
let num2 = Number(input.question("Input another number: "));
//this input function treats all inputs as strings. Must use Number() function.
console.log (num1 + num2);
console.log (typeof num1);
*/
const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);

let num1 = input.question("input num");
console.log (typeof num1);
let num = 1001;
function numToString (inputNum) {
    return inputNum = inputNum.toString();

}
function stringNumToLength (stringNum) {
    return numToString(stringNum).length-1;
    
}

function stringNumDecimalLength (counterinator) {
    counterinator = counterinator.toString();
    let numLength;
    if (counterinator.indexOf(".")!= -1) {
        numLength = counterinator.length - 1;
    } else {
        numLength = counterinator.length;
    }
    return numLength;
}
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
numString = num.toString();
console.log(numString.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
console.log(stringNumToLength(num));

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let input = require('readline-sync');

let userValue = input.question("Enter a number: ");
console.log(stringNumDecimalLength(userValue));
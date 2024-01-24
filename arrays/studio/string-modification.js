/* const input = require('readline-sync');
let str = "LaunchCode";
let str1 = "" */
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

/* let tempArr = str.split('');
tempArr.push(tempArr[0], tempArr[1], tempArr[2]);
tempArr.splice(0, 3, "");
str = tempArr.join();
str = str.split(',').join();
console.log(tempArr);
console.log(str); */
/* let userNum = input.question("Enter the number of letters to be displaced: ");

str1 = str.split("");
str1.push("lau");

str1.length ; 
str1.splice(0, userNum);
str1 = str1.join("");

console.log (str1);
 */

//Use a template literal to print the original and modified string in a descriptive phrase.
/* console.log(`
Original String: ${str}
Modified String: ${str1}
`)
 */

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

const userInput = require ('readline-sync');
let str = "LaunchCode";
let strArray = [];
let stringSection = [];
let message = "";

function pigLatinator (){
   console.log(`
   The string available for you to modify is ${str.length} long.`)
   let userNum = userInput.question(`
   How many characters from the beginning of the string would you like to mess with?: `)

   if (userNum <= str.length) {
      strArray = str.split("");
      stringSection = strArray.splice(0, userNum);
      strArray = strArray.concat(stringSection);
      strArray = strArray.join(""); 
      
      message = `Program complete. Outputting now: 
      Original String: ${str}
      Modified String: ${strArray}`
      } else {
      strArray = str.split("");
      stringSection = strArray.splice(0, 3);
      strArray = strArray.concat(stringSection);
      strArray = strArray.join("");   
      message = `
      The number you entered is larger than the string size.
      Defaulted to 3. 
      Original String: ${str}
      Modified String: ${strArray}`
   }
   return (message);
}

console.log("To run program, enter 'YES' in all caps");
let executeProgram = userInput.question("Run program: ");

if (executeProgram === "YES") {
   console.log("Starting program...");
   console.log(pigLatinator());
} else {
   console.log(`
   If you wanted the program to run, congrats, you've mucked it up. 
   Goodbye`);
}
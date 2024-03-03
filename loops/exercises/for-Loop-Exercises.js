/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
let firstArray = [];
    for (let i = 0; i < 21; i++) {
      firstArray.push(i);
}
console.log(firstArray);

//b. First way:
let oddArray = [];
for (let i = 3; i < 30; i+=2){
  oddArray.push(i);
}
console.log(oddArray);
//b. second way;
let oddArray2 = [];
for(let i = 3; i < 30; i++){
  while (i % 2 === 1){
    oddArray2.push(i);
    i++;
  }
}
console.log(oddArray2);

//c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
let evenNegatives = [];
for (let i = 12; i > -15; i-=2){
  evenNegatives.push(i);
}
console.log(evenNegatives);

let evenNegatives2 = [];
for (let i = 12; i > -15; i--){
  while(i % 2 === 0){
    evenNegatives2.push(i);
    i--;
  }
}
console.log(evenNegatives2);


/* d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

let challengeArray = [];
let maxVal = 1000000;
let minVal = 900000;

for (let i = maxVal; i >= minVal; i--){
  while (i % 3 === 0){
    challengeArray.push(i);
    i--;
  }
}
console.log(challengeArray);

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 


let string1 = "LaunchCode";
let array1 = [1, 5, 'LC101', 'blue', 42];

for(i = 0; i < array1.length; i++){
  let reversed = "";
  if (typeof array1[i] === "string"){
    for (let letter of array1[i]){
      reversed += letter;
    }
  } else {
    console.log(array1[i])
  }
  reversed = reversed.split("").reverse().join("");
  console.log(reversed);
}

for(let i = 0; i<= string1.length; i++){
  console.log(string1[string1.length-i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let bigArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let evenArray2 = [];
  let oddArray3 = [];
  for (i = 0; i < bigArray.length; i++){
    //evens first
    if (bigArray[i] % 2 === 0){
      evenArray2.push(bigArray[i]);
    } else if (bigArray[i] % 2 === 1){
      oddArray3.push(bigArray[i]);
    }
  };

  console.log(evenArray2);
  console.log(oddArray3);
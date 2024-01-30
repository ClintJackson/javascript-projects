const input = require('readline-sync');

function minimumInator (passedArray) {
  let localMin = passedArray[0];
  for (let i = 0; i < passedArray.length; i++) {
      if (passedArray[i] < localMin) {
          localMin = passedArray[i];
      }
  }

return localMin;
}

function numArraySorter (array) {

  let sortedLeastToGreatest = [];
  while (array.length > 0) {
    sortedLeastToGreatest.push(minimumInator(array));
    array.splice(array.indexOf(minimumInator(array)), 1);
  }

  return sortedLeastToGreatest;
}
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
function recursiveSorter(unsortedArray, newArray = []) {
  //basecase
  if (unsortedArray.length === 1) {
    newArray.push(unsortedArray[0]);
  } else {
    let userVal = input.question("Do you want ascending or descending order? Type a or d: ");
    if (userVal.toLowerCase === "a") {
      newArray.push(minimumInator(unsortedArray));
      unsortedArray.splice(unsortedArray.indexOf(minimumInator(unsortedArray)), 1);
      recursiveSorter(unsortedArray, newArray);
    }
  }
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(numArraySorter(nums2));
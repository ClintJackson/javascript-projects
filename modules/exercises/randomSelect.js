function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randArrayIndex = Math.floor(Math.random()*arr.length);
  return arr[randArrayIndex];
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;
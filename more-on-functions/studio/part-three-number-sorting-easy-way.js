//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function maxValueFinder (inputArray) {
    let localMax = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > localMax) {
            localMax = inputArray[i];
        }
    }
    return localMax;
}
//Sort each array in decending order.
function minValueFinder (inputArray) {
    let localMin = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < localMin) {
            localMin = inputArray[i];
        }
    }
    return localMin;
}


console.log(minValueFinder(nums1));
console.log(maxValueFinder(nums1));
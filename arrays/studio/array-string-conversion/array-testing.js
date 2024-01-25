let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	let reversedStrings = "";
	//TODO: 1. create and instantiate your variables.
	for (i = 0; i < strings.length; i++) {
		if ((strings[i].includes(',')) && !(strings[i].includes(", "))) {
			strings[i] = strings[i].split(",").reverse().join(",");
			reversedStrings += strings[i];
			}

		}

	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	
	return reversedStrings;
}

//3)
function semiDash() {
	let dashedStrings = "";
	
	for (i = 0; i < strings.length; i++) {
		if (strings[i].includes(';')) {
			strings[i] = strings[i].split(';').sort().join("-");
			dashedStrings += strings[i];
		}
	}

  
	return dashedStrings;
}

//4)
function reverseSpaces() {
	let reversedSpaceString = "";
	
	for (i = 0; i < strings.length; i++) {
		if (strings[i].includes(" ") && 
		!(strings[i].includes(",") ||
		strings[i].includes(";"))) {
			strings[i] = strings[i].split(" ").sort().reverse().join(" ");
			reversedSpaceString = strings[i];
		}
	}

	return reversedSpaceString;
}

//5)
function commaSpace() {
	let commaSpaceStrings = "";
	for (i = 0; i < strings.length; i++) {
		if (strings[i].includes(", ")) {
			strings[i] = strings[i].split(", ").reverse().join(",");
			commaSpaceStrings = strings[i];
		}
	}

	
  
	return commaSpaceStrings;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

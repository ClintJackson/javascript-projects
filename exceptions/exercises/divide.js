// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

class customError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
        this.message = message;
    }
}




function divide (numerator, denominator) {
    numerator = Number(numerator);
    denominator = Number(denominator);

    if (denominator === 0) {
        throw new customError("DivideByZeroError", "Attempted to divide by zero");
    }

    return numerator / denominator;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.name + ": " + error.message);
}
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

const userInput = require("readline-sync");
function chooseFillChar(){
    fillChar = userInput.question("Choose your fill char: ");
    if (fillChar.length > 1) {
        let defaultChar = "#";
        return defaultChar;
    }
    return fillChar;
}

function makeLine(size){
    return chooseFillChar().repeat(size);
}

//console.log(makeLine(5));

function makeSquare(size) {
    let square = makeRectangle(size);   
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height = width){
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width);
        if (i < height - 1) {
            rectangle +="\n";
        }
        
    }
    return rectangle;
}
//console.log(makeRectangle(3));

function makeDownwardStairs(height){
    let downwardStairs = "";
    for (let i = 1; i <= height; i++){
        downwardStairs += makeLine(i);
        if(i < height){
            downwardStairs += "\n"
        }
    }
    
    return downwardStairs;
}

//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaceCharLine = "";
    spaceCharLine += " ".repeat(numSpaces);
    spaceCharLine += "#".repeat(numChars);
    spaceCharLine += " ".repeat(numSpaces);
    
    return spaceCharLine;
}

//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    let triangle = "";
    for (let i = 0; i < height; i++){
        triangle += makeSpaceLine(height - i - 1, i * 2 + 1);
        if (i < height - 1){
            triangle += "\n";
        }
    }

    return triangle;
}

//console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let diamond = "";
    diamond += makeIsoscelesTriangle(height);
    
   reverseDiamond = diamond.split("").reverse().join("");
   diamond += "\n" + reverseDiamond;
    return diamond;
}

//console.log(makeDiamond(5))
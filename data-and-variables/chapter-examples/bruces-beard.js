//console.log('Bruce's beard'); (commenting out line1 to work with example code from text).
console.log(typeof("2345"));
console.log (Number("2345"));
console.log (typeof Number("2345"));
console.log(Number(17));

let number = 2;
let number2 = "2";

console.log (number + number2); 
console.log (number, number2);
console.log (number + Number(number2));

console.log (number**number2 + number2); //interesting...some sort of auto typeconversion occurred here with the exponent. 

let perfectRoot = 4;
console.log(number * Math.sqrt(perfectRoot));
console.log(number2 * Math.sqrt(perfectRoot));
//so, auto typeconversion (I hope that's the right term) when doing math, except for with '+'. 

console.log (Number('three'));
console.log (Number('3'));
console.log (Number('3 3'));
console.log (Number('33'));

console.log (2 ** 8 * 3);

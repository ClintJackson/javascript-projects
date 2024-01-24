//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let langSlice1 = language.slice(0, 1);
let langSlice2 = language.slice(4, 5);
console.log(langSlice1 + langSlice2);
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("Java", "J").replace("Script", "S"));
let langSlice3 = language.replace("Java", "J").replace("Script", "S");
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${langSlice3}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace("Java", "J").replace("Script", "S").toLowerCase());
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let isTitleCase = notTitleCase.replace("title", "Title").replace("case", "Case");
console.log(isTitleCase);
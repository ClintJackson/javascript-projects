const isPalindrome = require("../palindrome.js");

describe("testing the function 'isPalindrome'", function(){
//positive tests, should return true;
    test("should return true for simple inputs", function(){
        expect(isPalindrome("a")).toBe(true);
    });

    test("should return true for longer palindrome string", function(){
        expect(isPalindrome("aaaa")).toBe(true);
    });

    test("should return true still", function(){
        expect(isPalindrome("aba")).toBe(true);
    });

    test("should return true, test for case sensitivity", function(){
        expect(isPalindrome("aba")).toBe(true);
    });

    test("should return true for non-palindrome strings", function(){
        expect(isPalindrome("racecar")).toBe(true);
    });

//negative tests, should return false

    test("should return false for ab", function(){
        expect(isPalindrome("ab")).toBe(false);
    });

    test("should return false for 'launchcode'", function(){
        expect(isPalindrome("launchcode")).toBe(false);
    });

    //case matters
    test("should return false, case sensitivity test", function(){
        expect(isPalindrome("abA")).toBe(false);
    });

    //whitespace matters
    test("should return false for incorrect whitespace", function(){
        expect(isPalindrome("so many dynamos")).toBe(false);
    });
//edge cases: empty strings, char, space

    test("should consider empty strings to be palindromes", function(){
        expect(isPalindrome("")).toBe(true);
    });

    test("should expect single chars to be palindromes", function(){
        expect(isPalindrome("a")).toBe(true);
    });

    test("should consider strings with just spaces to be palindromes", function(){
        expect(isPalindrome(" ")).toBe(true);
    });

})
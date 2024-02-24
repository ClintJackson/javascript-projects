let checkFive = require("../checkFive.js");

describe("checkFive", function(){

    test("Should return string '4 is less than 5.' ", function(){
        expect(checkFive(4)).toBe("4 is less than 5.");
    });
    test("Should return string '5 is equal to 5.'", function(){
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });
    test("should return string 6 is greater than 5.", function(){
        expect(checkFive(6)).toBe("6 is greater than 5.");
    })

})
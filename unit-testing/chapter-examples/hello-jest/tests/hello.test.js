const {hello, setTemperature} = require('../hello.js');

describe("hello", function(){

      test("should return a custom message when name is specified", function(){
         expect(hello("Jest")).toBe("Hello, Jest");
      });

      it("should return a general greeting when name is not specified", function(){
        expect(hello()).toBe("Hello, World");
    });

});

describe("setTemperature function", function(){
  test("Should return Too high if the entered value is above 100", function(){
    expect(setTemperature(101)).toBe("Too high");
  });
  
  test("Should return Too low if the entered value is below 50", function(){
    expect(setTemperature(49)).toBe("Temp 49 is outside acceptable range");
  });
  
  test("Should return Temp set if entered value is between 50 and 100", function(){
    expect(setTemperature(51)).toBe("Temp set");
  });

  test("Edge case check for entered val of 50, expecting Temp set", function(){
    expect(setTemperature(50)).toBe("Temp set");
  });

  test("Edge case check for entered val of 100, expecting Temp set", function(){
    expect(setTemperature(100)).toBe("Temp set");
  });

  test("should return 'Temp' + '${tempInt}' + 'is outside acceptable range'", function(){
    expect(setTemperature(-19)).toBe(`Temp -19 is outside acceptable range`);
  });
  
  test("should return deep freeze temp set", function(){
    expect(setTemperature(-20)).toBe("Deep freeze temp set");
  });

})
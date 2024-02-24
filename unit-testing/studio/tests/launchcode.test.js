// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit'", function(){
    expect(launchcode["organization"]).toBe("nonprofit");
  });
  test("should return 'Jeff'", function(){
    expect(launchcode["executiveDirector"]).toBe("Jeff");
  });
  test("should return '100'", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return an array for programs offered", function(){
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("Should return a string from launchOutput() method", function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!'); //div by only 2
    expect(launchcode.launchOutput(3)).toBe('Code!'); // div by only 3
    expect(launchcode.launchOutput(5)).toBe("Rocks!"); // div by only 5
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!"); // div by 2 and 3
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!"); //div by 3 and 5
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!"); // div by 2, 3, and 5
    expect(launchcode.launchOutput(19)).toBe("Rutabagas! That doesn't work."); // not divisible by 2, 3, or 5
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)"); // divisible by 2 and 5
  });


  
});
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const userInput = require('readline-sync');

let fuelLevel = 0;
let numAstros = 0;
let maxAlt = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


function getFuelReading(){
  fuelLevel = userInput.question("Enter starting fuel: ");
  while(fuelLevel > 0) {
    while(fuelLevel >= 5000 && fuelLevel <= 30000){
      return "starting fuel is: " + fuelLevel + "kg";
    }
    do{
      fuelLevel = userInput.question("Fuel must be between 5,000 and 30,000 kg: ");
    } while (fuelLevel < 5000 || fuelLevel > 30000);

  }
  do{
    console.log("Fuel must be greater than 0");
    return getFuelReading();
  } while (fuelLevel <= 0);

}
//console.log(getFuelReading());

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
function getAstronautCount(){
  numAstros = userInput.question("Enter number of astronauts: ");
  while(numAstros <= 7 && numAstros > 0){
    return numAstros;
  }
  do{
    console.log("Astronaut count must be at least 0 and a max of 7.");
    return getAstronautCount();
  } while(numAstros > 7 || numAstros <= 0);
}

//console.log(getAstronautCount());
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

function launchRecord(){
  let fuelDecrement = 100 * numAstros;
  do {
    console.log(`
    Fuel Level: ${fuelLevel -= fuelDecrement}
    max Altitude: ${maxAlt += 50}km`);
  } while (fuelLevel > 0)
  return maxAlt;
}

function launchandResults(){
  getFuelReading();
  getAstronautCount();
  launchRecord();

  while (maxAlt >= 2000){
    console.log("The shuttle gained an altitude of " + maxAlt + "km");
    return "Orbit achieved!";
  }
  return "The shuttle gained an altitude of " + maxAlt +"km. \nFailed to reach orbit"
}
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(launchandResults());
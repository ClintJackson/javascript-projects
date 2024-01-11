// Declare and initialize the variables for exercise 1 here:
let readlineSync = require('readline-sync');

let engineIndicatorLight = readlineSync.question(`Enter current engine indicator light; refer to following options:
   'red blinking'
   'green'
   'green blinking: ' 
      `);
let fuelLevel = readlineSync.question("Enter current fuel level: ");
let engineTemp = readlineSync.question("Enter current engine Temperature: ");

let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = (spaceSuitsOn && shuttleCabinReady);


let computerStatusCode = 200;
let shuttleSpeed = 15000;

let commandOverride = false;

// BEFORE running the code, predict what will be printed to the console by the following statements:

//systems checks

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus = true) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if (computerStatusCode == 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode == 400) {
   console.log("Success! Computer online.");
} else { 
   console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

//temp, fuel, indicator light checks 

if ((engineIndicatorLight === "red blinking") || (fuelLevel <=900)){
   console.log("ENGINE FAILURE IMMINENT!");
   } else if (engineIndicatorLight != "red blinking") {
      if ((fuelLevel <= 12000 && fuelLevel >= 5000) && (engineTemp <=2600 && engineTemp >= 1200)) {
         console.log("Check fuel level. Engines running hot.");
      } 
      if (engineTemp <= 2500) {
         if (fuelLevel == 21000) {
            console.log ("Full tank. Engines good.");
         } else if (fuelLevel >= 18000) {
            console.log("Fuel level above 50%. Engines good.");
         }
      }
   }

//final failsafe, command override check   
if ((fuelLevel > 20000 && engineIndicatorLight != "red blinking")||(commandOverride == true)) {
   console.log ("Cleared to launch!");
} else {
   console.log("Launch scrubbed!");
}


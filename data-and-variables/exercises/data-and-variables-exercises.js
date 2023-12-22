// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKM = 225_000_000;
let distanceToMoonKM = 384_400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof spaceShuttleName);
console.log (typeof shuttleSpeedMPH);
console.log (typeof distanceToMarsKM);
console.log (typeof distanceToMoonKM);
console.log (typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = distanceToMarsKM * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = (hoursToMars / 24) 

// Print the results of the space mission calculations below
console.log("It will take", spaceShuttleName, daysToMars, "days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKM * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log (spaceShuttleName, "will require", daysToMoon, "days to reach Earth's moon.");
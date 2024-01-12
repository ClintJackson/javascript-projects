// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760_000;
let shuttleMassKg = 74_842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850_000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;


if (astronautCount <= 7 &&
    astronautStatus === "ready" &&
    totalMassKg < maximumMassLimit &&
    (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) &&
    fuelLevel === 100 &&
    weatherStatus === "clear"){
        console.log (`
        All systems are a go! Initiating launch sequence...
        ---------------------------------------------------
        
        Date: ${date} 
        Time: ${time}
        Astronaut Count: ${astronautCount}
        Crew Mass: ${crewMassKg}kg
        Fuel Mass: ${fuelMassKg} kg
        Shuttle Mass: ${shuttleMassKg} kg
        Total Mass: ${totalMassKg} kg
        Fuel Temperature: ${fuelTempCelsius}\u00B0C
        Weather Status: ${weatherStatus}
        ---------------------------------------------------
        Safe mission, astronauts!

        "To Infinity, and Beyond!"
            -George Washington
        `)
    } else {
    console.log ("Pre-launch check failed. Aborting Launch.");
}
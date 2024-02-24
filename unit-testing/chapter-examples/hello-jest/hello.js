function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "";
}

/*
setTemperature notes: 
    includes 50 and 100. 
    All test pass. 
    Negative values not allowed.
        -modified to include a "deep freeze" mode. 
*/
function setTemperature(tempInt) {
    if (tempInt > 100) {
        console.log(`Temp entered is too high (Entered: ${tempInt})`);
        return "Too high";
    } else if (tempInt < 50) {
        console.log(`Temp entered is too low (${tempInt})`);
        if(tempInt < -19 && tempInt > -51) {
            console.log(`Deep freeze temp set (${tempInt} degrees.)`)
            return "Deep freeze temp set";
        } else {
            return "Temp " + tempInt + " is outside acceptable range";
        }
    } else {
        console.log(`Temp set (${tempInt} degrees)`);
        return "Temp set";
    }
}

module.exports = {
    hello,
    setTemperature,
}
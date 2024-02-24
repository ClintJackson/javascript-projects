
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(enteredVal){
  
    if (
        enteredVal % 2 === 0 &&
        enteredVal % 3 === 0 &&
        enteredVal % 5 === 0) {
            return "LaunchCode Rocks!";
    }
    else if (enteredVal === 2) {
        return 'Launch!';
    } else if (enteredVal === 3) {
        return "Code!";
    } else if (enteredVal === 5) {
        return "Rocks!";
    } else if (enteredVal % 2 === 0 && enteredVal % 3 === 0) {
        return "LaunchCode!"
    } else if (enteredVal % 3 === 0 && enteredVal % 5 === 0) {
        return "Code Rocks!";
    } else if (enteredVal % 2 === 0 && enteredVal % 5 === 0) {
        return "Launch Rocks! (CRASH!!!!)";
    }
    return "Rutabagas! That doesn't work.";
  }
}

//console.log(launchcode.launchOutput());

module.exports = launchcode;


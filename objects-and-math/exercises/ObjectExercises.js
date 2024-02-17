const input = require('readline-sync');

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimp2 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
}
let dog1 = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
}

let randOrganism = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
}
// After you have created the other object literals, add the astronautID property to each one.
let animalArray = [superChimpOne, salamander, chimp2, dog1, randOrganism];
let usedIDs = [];
for (let i = 0; i < animalArray.length; i++) {
   let randID;

   do {
      randID = Math.floor(Math.random()*11);
   } while (usedIDs.includes(randID))

   usedIDs.push(randID);
   animalArray[i]["astronautID"] = randID;

   animalArray[i]["move"] = function () {
      let numberOfSteps;
      numberOfSteps = Math.floor(Math.random()*11);
      return numberOfSteps;
   }
   animalArray[i]["steps"] = 0;
   animalArray[i]["Turn Count"] = 0;
}


//prints out info for each animal.
/* for (let i = 0; i < animalArray.length; i++) {
   for (item in animalArray[i]) {
   console.log(item +": " + animalArray[i][item]);
   }
} */

//need a function that handles them individually

function crewReports (selectedCrew) {
   //let selectedCrew = input.question("Which astronaut's details would you like to print? ");
   //let returnMessage = "";
   let message ="";
   if (typeof selectedCrew === "string") {

      for (let i = 0; i < animalArray.length; i++) {
         if (animalArray[i].name === selectedCrew) {
            message = (`
            ${animalArray[i].name} is a ${animalArray[i].species}. 
            They are ${animalArray[i].age} years old and ${animalArray[i].mass} kilograms.
            Their ID is ${animalArray[i].astronautID}.`);
            //for (let item in animalArray[i]) {
               //returnMessage += item + ": " + animalArray[i][item] + "\n";
               
            //}
         }
      }

/*    } else if (typeof selectedCrew === "number" &&
               selectedCrew <= 10) {

   } */

   }
   return message;
}

//console.log(randOrganism.move());
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(array) {
   let returnMessage = "";
   let lowest;
   let winnersStand = [];
   
   for (let i = 0; i < array.length; i++) {
      while (animalArray[i].steps <= 20) {
         animalArray[i].steps += animalArray[i].move();
         animalArray[i]["Turn Count"] += 1;
      }
   }
   for (let i = 0; i < array.length; i++) {
      let raceFinishMessage = `${animalArray[i].name} took ${animalArray[i]["Turn Count"]} turns to take 20 steps.`;
      console.log(raceFinishMessage);
   }
   //'... = spread operator to pass indiv arg to Math.min
   //these are "callback functions"
   //TODO: read more about callback functions due to minimal grasp of concept. 
   lowest = Math.min(...animalArray.map(animal => animal["Turn Count"])); 
   winnersStand = animalArray.filter(animal => animal["Turn Count"] === lowest);
   returnMessage = "Winners: \n"

   winnersStand.forEach(winner => {
      returnMessage += `${winner.name} reached 20 steps in ${winner["Turn Count"]} turns. \n`;
   });
   return returnMessage;
}



console.log(crewReports("Leroy"));

console.log(fitnessTest(animalArray));
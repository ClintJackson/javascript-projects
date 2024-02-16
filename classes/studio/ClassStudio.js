//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i];
        }
        let average = sum / this.scores.length;
        return Math.round(average * 10) /10;
    }

    status(avg) {
        if (this.average() >= 90) {
            return "Accepted";
        } else if (this.average() >= 80) {
            return "Reserve";
        } else if (this.average() >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
};

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltest", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

gator.addScore(87);
//merry.average()
//console.log(bubbaBear);
console.log(merry.average());
//console.log(gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(`
    ${gator.name} earned an average of ${gator.average()}% and has a status of ${gator.status(gator.average())}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let counter = 0;
while (gator.average() < 90){
    gator.addScore(Math.floor(Math.random() * (100-70 + 1)) + 70);
    counter += 1;
    if (counter > 100) {
        console.log("Too many counts dont break my pc plz");
        break;
    }
}
console.log(gator.scores);
console.log(gator.status());
console.log(counter);
console.log(gator.average());
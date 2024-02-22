class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);

class Car {
	constructor(make, model, year, color, mpg){
	   this.make = make,
	   this.model = model,
	   this.year = year,
	   this.color = color,
	   this.mpg = mpg
	}
 }

 let myCar = new Car ("Tesla", "Model S", 2019);
 console.log(myCar);
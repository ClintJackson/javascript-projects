//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

class MyFox extends Astronaut {
  constructor(name, age, mass, isFriendly){
    super(name, age, mass);
      this.isFriendly = isFriendly;
  }
  ageIncrementer() {
    this.age += 1;
  }
}

let fox1 = new MyFox ("Foxy", 22, 13, true);

console.log(fox1);
// Goal:-true length property definees the true lenght of string

let myString = "Samyak      ";
let myChannel = "code      ";

// console.log(myString.length);

// make a method truelength to find the true length of string

const myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

// console.log(heroPower.thor);

Object.prototype.samyakJ = function () {
  console.log(`samyakJ is present in all objects`);
};

Object.prototype.sumOfNumbers = 6;

// console.log(
//   `Object refers to the this numbers is ${heroPower.samyakJ.sumOfNumbers}`
// );
// myHeroes.samyakJ();
// inherital prototype is
// Array,string prototype property is linked to parent object if we inject
//  any property into the object then automatically function can be accessed through any lower property

// inheritance

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "JS assignMent",
  fullTime: true,
  __proto__: TeachingSupport,
};
// console.log(TASupport.isAvailable);
//modern syntax

String.prototype.trueLength = function () {
  console.log(`True length is : ${this.trim().length}`);
};

"Amazon   ".trueLength();

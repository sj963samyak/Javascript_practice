function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
const chai = new createUser("chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe(); //error cannot read properties of printMe
// to print this we have to used the new keyword
// to allocate the space
/*importance of new keyword
new keyword:-
1.creation of new js object
2.prototype property is linkek to the object
3.contructor is called
4.
*/

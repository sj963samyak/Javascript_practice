"use strict"

// alert("hello") we are using node not browser

// operations conversion

// console.log(1+"2") //12
// console.log("2"+1) //12
// console.log(1+2+"2") //32
// console.log("1" +2 +2) //122
// ----------------------------------------------------------------------->
// memory and threads in javascript
/*
1.primitive types(Stack memory)
2.Non-primitive(Heap)

Stack memory==>only a copy is changed orig. value is not changed
Heap memory=>In this memory refernce is given to the other object so value in duplicate will also changes the other value
*/
// Heap memory location
// let userOne = {
//     email: "user@google.com",
//     upi: "user@paytm"
// }
// let userTwo = userOne
// userTwo.email = "samyak@gmail.com"
// console.log(userOne.email) //samyak@gmail.com
// console.log(userTwo.email) //samyak@gmail.com
// -------------------------Strings--------------------------------------------->
/*
String concept

String interpolation we will use `` back ticks to represent the variable in a string

let name="hitesh"
let company="meta"
console.log(`My tutor name is ${name} and he is working in ${company}`)

*/

const nameUser=new String("GoogleMail")
console.log(nameUser)
// Using this we can get the prototypes method

console.log(nameUser.charAt(2))
console.log(nameUser.indexOf('M'))

let name=nameUser.substring(0,4) //substring method ignores the last character
console.log(name)

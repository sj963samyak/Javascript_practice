//29,30,31,32
//for of loop
// const arr=[1,2,3,4]
// for(const num of arr){
//     console.log(num)
// }
//we can also print the string using the for of loop
// const greetings="Hello World!!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }
//maps in javascript
//map in javascript has two values key and value
const map=new Map()
map.set('In',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
// console.log(map)

// for(const [key,value] of map){
//     // console.log(key,'-',value)
// }
//how to iterate through an object using for in loop
const studentDetails={
    studentId:2,
    studentUserName:"Samyak",
    studentCourse:"dataScience"
}
for(const key in studentDetails){
    console.log(`${key} and value ${studentDetails[key]}`)
}

//call back functions
//for each loop
const coding=["js","rubyscript","java","python"]
coding.forEach(fun1)
function fun1(){
    console.log("greet")
}
coding.forEach((item)=>{
    console.log(item + "-")
})


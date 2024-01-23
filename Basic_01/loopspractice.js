//30,31,32
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

//filter map and reduce
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
console.log(newNums)
const newNums1=myNums.filter((num)=>{
    return num>5
})
console.log(newNums1)
//when we start a scope then we will always use the return keyword

//when we filter the values of object we use filter method
const studentUsers=[
    {
        studentId:1,
        studentCourse:"python"
    },
    {
        studentId:2,
        studentCourse:"java"
    }
]
//find out the course of student whose id is 2
let userCourse = studentUsers.filter((st)=>st.studentId===2)
console.log(userCourse[0].studentCourse)
//using map we can add the value to each array element or we can perform operation to each element
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums3=myNumbers.map((num)=>{
    return num+10
})
console.log(newNums3)
//reduce method important
const array1=[1,2,3,4]
const myTotal=array1.reduce(function(acc,currValue){
    console.log(`acc: ${acc} and current value is ${currValue}`)
    return acc+currValue
},0)

const myTotalAr=array1.reduce((acc,currValue)=>{
    return acc+currValue
},0)
console.log(myTotalAr +"--")
// used in asynchronous operation
// promises has woparts
// 1.comsume and create
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    //do crypto task
    setTimeout(function () {
        console.log("asycn task is completed")
        resolve()//to connect the promise with async task 
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise is comsumed")
})//resolve appprach
// Method 2.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("second method")
        resolve()
    }, 1000)
}).then(function () {
    console.log("promise is fullfilled")
})
// method 3.how to pass the values into the promise pass into the resolcve function
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const obj = {
            username: "samyak",
            userId: "sj963samyak"
        }
        resolve(obj)
    }, 1000)
})
promiseThree.then(function (userObj) {
    console.log(userObj)
})
// method 4. in this we have used promise chaining in this we passed the returned value of 1st promise to chained then object
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error)
            resolve({ userName: "sj", userId: "2" })
        else {
            reject('ERROR SOMETHING WRONG')
        }
    }, 1000)
})


    .then(function (user) {
        console.log(user)
        return user.userName
    })
    .then(function (name) {
        console.log(name)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => console.log("finally keyword is used"))
// method 5 async await syntax

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true
        if (!error)
            resolve({ userName: "samyak_jain", userId: "456" })
        else {
            reject('this is the error given by async function')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()


//an api request to get all the users 

async function getAllUsers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error)
    }
}

getAllUsers()
//method 5 using the fetch api response to get all response

fetch('https://jsonplaceholder.typicode.com/users').
then((response)=>{return response.json()}).
then((data)=>{
    console.log("response is",data);
}).
catch((error)=>{
    console.log(error);
})


// task call this api using xml http request
//conclusion it will not work is uses the browser to send the html request
const arr=[]
const xhr1=new XMLHttpRequest()
xhr1.open('GET',"https://jsonplaceholder.typicode.com/users")
xhr1.onreadystatechange=function(){
    console.log(xhr1.readyState)
    if(xhr1.readyState===4)
    console.log(this.responseText);
    arr.push(this.responseText)
    console.log(arr);
}
xhr1.send()
console.log("array is",arr);

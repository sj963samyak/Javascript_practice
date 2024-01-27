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
// method 4.
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

// method four in this we have used promise chaining in this we passed the returned value of 1st promise to chained then object
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
        let error = false
        if (!error)
            resolve({ userName: "samyak_jain", userId: "456" })
        else {
            reject('async awaits gives error')
        }
    }, 1000)
})

//bluebird and q libaray for early javascript asynchronous functions

// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     // DB Calss , Cryptography, network

//     setTimeout(function(){
//         console.log("Async Task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise Consume');
    
// })
// // then is related to resolve

// //creating promises


// new Promise(
//     function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 is resolved");
// })



// const promiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){

//         resolve({username: "Chai",email: "chai@email.com"})

//     },1000)

// })

// promiseThree.then(function(user){

//         console.log(user);

// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true
//        if(!error){
//         resolve({username: "Haris", password : "123"})
//        }

//        else{
//         reject("Error | Somthing Went Wrong !")
//        }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The Promise is Either Resolved or rejected"))


//-------------------------------

// Async await function

// const  promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Javascript", password : "123"})
//         }
//         else{
//             reject("Error | js went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive

//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }

// }

// consumePromiseFive()


//-------------------------------------

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
//     const data = await response.json()

//     console.log(data);
//   }

//   catch(error){
//     console.log("E : ",error);
//   }

// }

// getAllUsers()


fetch("https://api.github.com/users/Haris-Bin-Ejaz")
.then((response)=>{

    return response.json()
}).
then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log('Error');})
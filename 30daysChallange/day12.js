//Day 12 Error Handling

//Activity 1

num = 2

function throwError(num){

    if(num <= 0){
        throw new Error("This is an error")
    }

    return num

}

//throwError(num)

//......................

// function throwError2(num){

//     return num/0
// }

// console.log(throwError2(num));


function throwError2(numerator, denominator){

    if (denominator === 0) {

        throw new Error("Denominator cannot be Zero")
        
    } else {
       return numerator/denominator
    }

    
}

// try{
//     console.log(throwError2(10,0));
    
// }
// catch(error){
//     //console.log(error);
//     console.log(error.message);
    
// }


// .........................................................
//Activity 2


// try {

//     console.log('This is try block');

//     console.log(throwError2(10,0));
    
    
// } catch (error) {

//     console.log(error.message);
    
    
// }
// finally{

//     console.log("This is finally block");
    

// }

// .........................................................
//Activity 3

class customErrorClass extends Error{

    constructor(msg){
        super(msg)
        this.name = "my custom error"
    }
}

function errorInstanceCatcher() {

    throw new customErrorClass("This is a custom error message");

  }


//   try {
//     errorInstanceCatcher();
//   } catch (error) {
//     if (error instanceof customErrorClass) {
//       console.log(`Caught a custom error: ${error.message}`);
//     } else {
//       console.log(`Caught an unexpected error: ${error.message}`);
//     }
//   }


  //.......................................

  class validationClass extends Error{

    constructor(message){

        super(message)

        this.name = "Validation Error!"

    }

  }

  function checkUserInput(input){

    if (!input || input.trim() === ""){

        throw new validationClass("Input cannot be empty!")
    }

    else{

        return true

    }
  }

// try {

//     checkUserInput("")
    
// } catch (error) {
    
//     console.log(error.message);
    
// }



// .........................................................
//Activity 4


// function randomPromises (){

//     setInterval(()=>{

//         new Promise((resolve,reject)=>{

//             let num = Math.random()

//             if(num < .5){
//                 resolve(`Promise Resolved with the Value : ${num}`)
//             }
//             else{
//                 reject(`Promise Rejected with the Value : ${num}`)
//             }

//         })
//         .then((msg)=> console.log(msg))
//         .catch((msg)=> console.log(msg))



//     },100)

// }

// randomPromises()


//.........................


// function randomPromises2 (){

//        return  new Promise((resolve,reject)=>{

//             let num = Math.random()

//             if(num < .5){
//                 resolve(`Promise Resolved with the Value : ${num}`)
//             }
//             else{
//                 reject(`Promise Rejected with the Value : ${num}`)
//             }

//         })
        
// }


// async function handlePromise() {

//     try {
        
//         let result = await randomPromises2()
//         console.log(result);
        
//     } catch (error) {

//         console.log(error);
        
//     }
    
// }


// handlePromise()



// .........................................................
//Activity 5


function fetchFaulty (){

   return fetch("http://invalidurl.com")
   .then((data)=>console.log("Data found"))
   .catch((error)=>console.log(error.message))
}

function fetchFaultyImproved (){

   return fetch("http://invalidurlavc.ors")
   .then((response)=>{

    if(response.ok){

        console.log("Data Found");
        
    }

    else {

        // to handle unsucessfull responce 

        console.log("here i am");
        
        throw new Error("Responce was not ok")
    }


   })
   .catch((error)=>{

     // to handle network error or invalid url error

    console.log("Invalid URL / Network Error");
    console.log(error.message)
})
}

//fetchFaulty()

//fetchFaultyImproved()


//......................


async function fetchFaultyImproved2 (){

    try {

        let data =  await fetch("http://invalidurlavc.ors")

        return data
       

    } catch (error) {

        console.log(`Error : ${error}`);
        
        
    }
}

fetchFaultyImproved2()



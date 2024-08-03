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




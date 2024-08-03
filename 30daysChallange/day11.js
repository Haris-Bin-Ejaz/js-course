// Day 10 Promises


// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(e){

//         console.log("abc");
//         //console.log(e); its indefined
//         resolve()

//     },2000)
// })

// promise1.then(()=>console.log("Resloved"))

//then takes 2 callbacks 1st for resolve 2nd for reject

// promise does not need to be called

// -------------------------

// value = 45
// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(e){

//         console.log("something worng");
//         //console.log(e); its indefined
//         reject(value)

//     },2000)
// })

// promise2.then(()=>console.log("Resloved")).catch((val)=> console.log("Rejected with value",val))

//then takes 2 callbacks 1st for resolve 2nd for reject


//----------------------------------------------------------------------------
// Activity 2 

// let data = 0

// let fetchdata1 = new Promise(
//     (resolve,reject)=>{
//         setTimeout(()=>{
//             data += 1
//             console.log("Data from Server");
//             resolve(`Data is added ${data}`)
//         },1000)
//     }
// )
// let fetchdata2 = new Promise(
//     (resolve,reject)=>{
//         setTimeout(()=>{
//             data += 1
//             console.log("Data from Server");
//             resolve(`Data is added ${data}`)
//         },1000)
//     }
// )
// let fetchdata3 = new Promise(
//     (resolve,reject)=>{
//         setTimeout(()=>{
//             data += 1
//             console.log("Data from Server");
//             resolve(`Data is added ${data}`)
//         },1000)
//     }
// )



// fetchdata1
// .then(
//     (data1)=> {
//         console.log(data1);
//         return fetchdata2
//     }
// )
// .then(
//     (data2)=> {
//         console.log(data2);
//         return fetchdata3
//     }
// )
// .then(
//     (data3)=> {
//         console.log(data3);
//         console.log("Data Addition Complete");
//     }
// )
// .catch(
//     ()=>{
//         console.log("Data addition failed");
//     }
// )


//----------------------------------------------------------------------------
// Activity 3

// async function getResolvedValue(){
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Promised Resolved")

//         },1000)
//     }).then((resolveValue)=>{
//         console.log(resolveValue);
//     })

    
// }

//getResolvedValue()

//....................

// async function getResolvedValue(){
//     let promise = new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Promised Resolved")

//         },1000)
//     })

//     //console.log(await promise);

//     console.log(promise);



    
// }

// getResolvedValue()

//.................................................


async function getRejectedValue(){

    let promise = new Promise((_r, reject)=>{

        setTimeout(()=>{

            reject('Promise Rejected')

        },1000)

    })

    try{
        
        console.log(await promise);
    }

    catch(error){

        console.log(error);

    }
}

//getRejectedValue()

//----------------------------------------------------------------------------
// Activity 4

// let promiseData1 = new Promise((resolve, reject)=>{
    
//     let data = fetch("https://randomuser.me/api/")
//     resolve(data)

// }).then((data)=>{

//     return data.json()

// }).then((data)=>{

//     console.log(data);
    
// })


//...........................

//using async Await

// async function getData() {
    
//     try {

//         let data = await fetch("https://randomuser.me/api/")
//         resolve(data)
        
//     } catch (error) {
//         console.log("Failed to get data");
        
//     }
    
// }

// getData()



//.....................................................................
//Activity 5

let p1 = Promise.resolve("Direct Value")
//let p2 = Promise.reject("Direct Value P2")

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Value in timeout');
  });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{

//         resolve("Value in Resolve")

//     },100);
//   });

let p4 = 10
  
Promise.all([p1,p3,p4]).then((values)=>{
    console.log(values);
    
}).catch((error)=>{
    console.log(error);
    
})

Promise.race([p1,p3,p4]).then((values)=>{
    console.log(values);
    
}).catch((error)=>{
    console.log(error);
    
})


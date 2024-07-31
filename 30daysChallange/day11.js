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

let data = 0

let fetchdata1 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            data += 1
            console.log("Data from Server");
            resolve(`Data is added ${data}`)
        },1000)
    }
)
let fetchdata2 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            data += 1
            console.log("Data from Server");
            resolve(`Data is added ${data}`)
        },1000)
    }
)
let fetchdata3 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            data += 1
            console.log("Data from Server");
            resolve(`Data is added ${data}`)
        },1000)
    }
)



fetchdata1
.then(
    (data1)=> {
        console.log(data1);
        return fetchdata2
    }
)
.then(
    (data2)=> {
        console.log(data2);
        return fetchdata3
    }
)
.then(
    (data3)=> {
        console.log(data3);
        console.log("Data Addition Complete");
    }
)
.catch(
    ()=>{
        console.log("Data addition failed");
    }
)



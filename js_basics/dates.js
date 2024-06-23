console.log("Dates In JavaScript");

let myDate = new Date()

// console.log(myDate);

//console.log(myDate.toString());

//console.log(myDate.toDateString());

//console.log(myDate.toLocaleString());

//let myCusDate = new Date(2023,0,23) 
//console.log(myCusDate);
//console.log(myCusDate.toDateString());

//let myCusDate2 = new Date(2023,0,25,5,3)
//console.log(myCusDate2.toLocaleString());

// let myCusDate3 = new Date("2023-01-14")

// console.log(myCusDate3.toLocaleString());

// let myCusDate4 = new Date("01-14-2024")

// console.log(myCusDate4.toLocaleString());

// console.log("Timestamp");

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCusDate3.getTime());

// console.log(Math.floor(Date.now()/1000)); // to convert to second

let newDate = new Date();


console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'en-PK'

})

//console.log(newDate);
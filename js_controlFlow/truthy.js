console.log("Truth and False Value\n");

//const userName = "" : False
// const userName = [] : True


// if (userName){
//     console.log("Got Username");
// }
// else{
//     console.log("Dont have username");
// }

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
//"0", 'false', " ", [], {}, function(){}--> Empty Function, 


// const EmptyArr = []
// if(EmptyArr.length === 0){
//     console.log("Array is Empty");
// }

// const EmptyObj = []
// if(Object.keys(EmptyObj).length === 0){
//     console.log("Object is Empty");
// }


//console.log(0 == "");
//console.log(false == "");
//console.log(false == 0);

// Nullish Coalescing Operator (??) : null undefiend

let val1;

// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

//val1  = undefined ?? 15 ?? 20

val1  = false ?? 15 ?? 20


console.log(val1);

// Terniary Operator

// Condition ? True : False

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log('less than 80'): console.log("More than 80");




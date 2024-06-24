console.log("Functions in depth\n");


function calculateCartPrice(num1){

    return num1
}

//console.log(`Result of {calculate cart Price} = ${calculateCartPrice(2)}`);


// rest/spread operator
//rest (...)

function calculateCartPriceAdvance(...num){

    return num
}


//console.log(calculateCartPriceAdvance(2,4,5,6));

//console.log(`Result of {calculate cart Price Advance} = ${calculateCartPriceAdvance(2,4,5,6)}`);


// function calculateCartPriceAjeeb(val1, val2, ...num){

//     return num
// }


// console.log(calculateCartPriceAjeeb(2,4,5,6));

// console.log(`Result of {calculate cart Price Ajeeb} = ${calculateCartPriceAjeeb(2,4,5,6)}`);



const user = {
    username: "haris",
    age:23
}

function objectHandler(object){
    console.log(`Username is ${object.username} and age is ${object.age}`);
}


//objectHandler(user)

// objectHandler({
//     username: "Haris Bin Ejaz",
//     age: 23
// })


const myarray = [200,300,400]

function returnArraySepcificVal(arr, index){
    return arr[index]
}

//console.log(returnArraySepcificVal(myarray,2));

console.log(returnArraySepcificVal([400,300,500],2));



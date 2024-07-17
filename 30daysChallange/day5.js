//Day 5 | Functions

//Activity 1

//Function Declaration

function checkEvenOrOdd(num){
    if (num % 2 == 0){
        console.log(`The Number ${num} is even`);
    }
    else{
        console.log(`The Number ${num} is Odd`);
    }
}

//checkEvenOrOdd(55)



function square(num){
   return num *= num
}

//console.log(square(5));


//-----------------------------

//Activity 2 Function Expression

const maximumOrMinimum = function(num1, num2){
 return Math.max(num1,num2)
}

const concatString = function(string1, string2){
    return string1.concat(string2)
}

//console.log(maximumOrMinimum(10,12));
//console.log(concatString('har','is'));

//----------------------------------------

// Activity 3

const sum = (num1 ,num2)=> num1+num2

// console.log(sum(9,6));

string = 'abcdefgh'
const existOrNot = ( character) => {
    if (string.includes(character)){
        return true
    }
    else return false
}

//console.log(existOrNot('h'));

//----------------------------------------------

//Activity 4

function product(num1 , num2 = 1){
    return num1 * num2
}

//console.log(product(6,1));
//console.log(product(3,3));

function greet(name, age = 18){

    console.log(`Hello ${name}, it seems good to hear that you are ${age} old`);
}

// greet('Haris')
// greet('Haris',10)


//----------------------------------------------

//Activity 5

function toRepeat(num){
    console.log(`I am Repeating ${num}`);
}

function repeat(func, num){
    for(let i = 1; i<= num; i++){
        func(i)
    }
}

//repeat(toRepeat,5)


function plusOne(num){

    return num +1
}

function minusOne(num){

    return num -1
}

function applied(f1, f2 , value){
    return f2(f1(value))
}

console.log('Value =', applied(plusOne,minusOne,6));
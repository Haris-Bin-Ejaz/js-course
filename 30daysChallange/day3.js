// Control Flow

//Activity 1

// let a = 2

// if (a > 0){
//     console.log("The Number is Positive");
// }
// else if (a < 0){
//     console.log("The Number is Negative");
// }

// else{
//     console.log("The Number is Zero");
// }


// --------------------

let age = 10

// if (age >= 18){
//     console.log('You Are Eligble to Vote');
// }

// else{
//     console.log("You Are not Eligble to Vote");
// }


//--------------------------------------------
//Activity 2

let n1 = 5
let n2 = 8 
let n3 = 10


// if(n1 > n2){

//      if(n1 > n3){
//         console.log(`Largest Number is N1= ${n1}`);
//      }
// }

// else if(n2 > n3){

//      if(n2 > n1){
//         console.log(`Largest Number is N2 = ${n2}`);
//      }
// }

// else{
//     console.log(`Largest Number N3 = ${n3}`);
// }



//--------------------------------------------

//Activity 3

let dayNumber = 8

// switch(dayNumber){

//     case 1:
//         console.log("Its Monday");
//         break
//     case 2:
//         console.log("Its Tuesday");
//         break
//     case 3:
//         console.log("Its Wednesday");
//         break
//     case 4:
//         console.log("Its Thursday");
//         break
//     case 5:
//         console.log("Its Friday");
//         break
//     case 6:
//         console.log("Its Saturday");
//         break
//     case 7:
//         console.log("Its Sunday");
//         break
//     default:
//         console.log("Please Enter a valid day number");
// }

// ---------------

// Error Code

// let marks = 98

// switch(marks){

//     case marks >= 95:
//         console.log("A+");
//         break
//     case marks >= 90:
//         console.log("A");
//         break
//     case marks >= 85:
//         console.log("B+");
//         break
//     case marks >= 80:
//         console.log("B");
//         break
//     case marks >= 75:
//         console.log("C+");
//         break
//     case marks >= 70:
//         console.log("C");
//         break
//     case marks >= 60:
//         console.log("D");
//         break
    
// }


// let marks = 98

// switch(true){

//     case marks >= 95:
//         console.log("A+");
//         break
//     case marks >= 90:
//         console.log("A");
//         break
//     case marks >= 85:
//         console.log("B+");
//         break
//     case marks >= 80:
//         console.log("B");
//         break
//     case marks >= 75:
//         console.log("C+");
//         break
//     case marks >= 70:
//         console.log("C");
//         break
//     case marks >= 60:
//         console.log("D");
//         break
    
// }


//---------------------------------------------------

// Activity 5

let date = new Date();
let currentYear = date.getFullYear();

console.log(currentYear);

if (currentYear%4 === 0 || currentYear%100 !== 0 || currentYear%400 === 0){

    console.log("The Year is Leap year");
}

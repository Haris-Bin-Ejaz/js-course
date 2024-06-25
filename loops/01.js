console.log("For Loops in Js\n");


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop value ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Outer loop value ${i} and inner loop value ${j}`);
//         console.log(i + " * " + j + " = " +i*j);
//     }
// }

let myArray = ["Flash", "Batman", "Superman"]


// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// for (let index = 0; index < myArray.length; index) {
//     const element = myArray[index];
//     console.log(element);
// }



// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue

// for (let index = 1; index <= 20; index++) {

//     if (index == 5){
//         console.log("Detected");
//         break
//     }
//     console.log(`Value of index is ${index}`);;   
// }


for (let index = 1; index <= 20; index++) {

    if (index == 5){
        console.log("Detected");
        continue
    }
    console.log(`Value of index is ${index}`);;   
}
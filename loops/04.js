console.log("For in loops");
// for in for objects


const myObj ={
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

// // for in loop
// for (const key in  myObj) {
 
//         console.log(key);
//  }  // for key

// //=---------------------------
// // for of for value
// for (const key in  myObj) {
//         console.log(myObj[key]);
// }

//=---------------------------
// for of for both key value
// for (const key in  myObj) {
//         console.log(`${key} is shortcut for ${myObj[key]}`);
// }


// for in for array

const proArr = ["JS","PY","RB","CPP"]

// for (const key in proArr) {
//     //console.log(key); array index

//     console.log(proArr[key]);
// }



//for in for map
const map = new Map()
map.set('Pak',"Pakistan")
map.set('KSA',"Saudia Arabia")

// for (const key in map) {
//     console.log(key);
// } // return nothing because map is not iteratable



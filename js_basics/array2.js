console.log("Array in Depth\n\n")

const marvel_heros = ["Thor","Ironman","Spiderman"]
const DC_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(DC_heros) // pushes array as an element

// console.log(marvel_heros);


// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(DC_heros)

// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...DC_heros] //multiple array can combine

// console.log(all_new_heros);


const ajeebArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const chitrolledArray = ajeebArray.flat(Infinity)

console.log(chitrolledArray);

console.log("--\n");

console.log(Array.isArray("Haris"))

console.log(Array.from("Haris Bin Ejaz"));

console.log("-------\n");

console.log(Array.from({name: "Haris"})); // interesting
//does not convert object directly
// need to specify from key/values


console.log("-------\n");

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));

console.log("-------\n");


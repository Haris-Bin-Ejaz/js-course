console.log("For of and each loops\n");

// for off is mainly for array

//["","",""]
//[{},{}]

const arr = [1,2,3,4,5]


// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "hello World"

// for (const greet of greeting) 
//     {console.log(`Each Char is ${greet}`);}

//Maps
const map = new Map()
map.set('Pak',"Pakistan")
map.set('KSA',"Saudia Arabia")
//console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key, "=", value);
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

const myObj2 = {
    game1 : 'NFS',
    game2 : 'GTA'
}

// for (const [key,value] of myObj) {
//     console.log(key, "=", value);
// }

// for (const [key,value] of myObj2) {
//     console.log(key, "=", value);
// }
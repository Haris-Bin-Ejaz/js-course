console.log("\nObjects in JavaScript\n");

//singleton 
// a single object throught constructor
//Object.create

const mySymbol = Symbol("key1")

//object literals
const obj1 = {
    name: "Haris",
    age: "Somewhere",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
    "stringKey":"StringValue",
    //mySymbol : "mk1"
    [mySymbol] : "mkey1"
}

console.log(obj1.name);


console.log(obj1["name"]);

//to access stringkey
console.log(obj1["stringKey"]);



console.log("\n--------------------\n");

// console.log(obj1.mySymbol);
// console.log(typeof(obj1.mySymbol));
// it will not return symbol


console.log(obj1[mySymbol]);
console.log(typeof(obj1[mySymbol]));
// it will return symbol

console.log("\n--------------------\n");

// console.log(obj1.age);

// obj1.age = 25

// console.log(obj1.age);

// Object.freeze(obj1)

// console.log(obj1);

console.log("\n--------------------\n");

obj1.greet = function(){

    console.log("Welcome")
    //console.log(`Hellow ${console.log(obj1.name)}`);
}

obj1.greet2 = function(){

    console.log(`Hellow ${this.name}`);
}


console.log(obj1.greet());
console.log(obj1.greet2());
 
console.log("\n--------------------\n");
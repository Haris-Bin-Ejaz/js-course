console.log("Objects in Depth\nSingleton Objects\n");

const tinderUser = new Object()
//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Jonny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "Someone@gmail.com",
    fullname: {
        userFullname :{
        firstName : "Haris",
        lastName : "Ejaz"}
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);

console.log("-------------------------\n");

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "A",
    4: "B"
}

//const obj3 = {obj1,obj2}
//console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)  // merging objects

// console.log(obj3);




//console.log("-------------------------\n");
//spreading
obj4 = {...obj1,...obj2}
console.log(obj4);

//console.log("\n-------------------------\n");

// databases data
const users = [

    {
        id : 1,
        email : "1@gmail.com"
    },
    {
        id : 2,
        email : "2@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // array of keys // important

console.log(Object.values(tinderUser)); // array of values // important
console.log(Object.values(tinderUser)); // array of values // important

console.log(Object.entries(tinderUser)); // array of [key/values] 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






//console.log("\n-------------------------\n");
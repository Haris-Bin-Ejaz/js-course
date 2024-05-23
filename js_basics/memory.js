// Memories in JS

//Stack 
// used in premitive types
// copy of value

//Heap
//used in non premetive types
// reference of value

let myName = "Haris Bin Ejaz";

let anotherName = myName

anotherName = "Name 2"

console.log(anotherName);
console.log(myName);

let user1 = {
    email: "someone@gmail.com",
    user: "u2"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log("User1 = "+user1.email);console.log("User 2 = " +user2.email);

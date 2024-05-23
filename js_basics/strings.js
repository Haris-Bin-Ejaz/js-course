// Js Strings

const name = "Haris"

const repoCount = "50"

//console.log(name + repoCount);  // dont use this


// `` for fstings

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Haris-Bin-Ejaz')

//console.log(gameName[0])
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

console.log(gameName.indexOf("i"));

const gN2 = gameName.substring(0,8)

console.log(gN2);

const anotherString  = gameName.slice(-14,6)

console.log(anotherString);


const s3 = "    spaces  "
console.log(s3);
console.log(s3.trim());

const url = "mywebsite%20one@gmail.com"

console.log(url.replace("%20","_"))


const newCString = new String("Haris-Bin-Ejaz-PC")

console.log(newCString.includes("Haris"));

console.log(newCString.split("-"));





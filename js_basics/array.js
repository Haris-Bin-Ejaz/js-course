console.log("Arrays in JS");

const myArr = [0,1,2,3,]

console.log(myArr[2]);


//Shallow Copy --> share same reference

//Deep Copy --> Does not share same refernce

const myArr2 = ['Batman','superman'];

const myArr3 = new Array(1,2,3,4)

console.log("Array Methods");

// myArr.push(4)
// console.log(myArr);

// myArr.push(5)
// console.log(myArr);

//  myArr.pop()
//  console.log(myArr);

myArr.unshift(0)
// console.log(myArr);
// myArr.unshift(9) //add at start
// console.log(myArr);


// console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr); // removes first element


// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// console.log(myArr); // array
// console.log(newArr);  // join

console.log("Slice, Splice");

const myn1 = myArr.slice(1,3)
console.log("slice", myn1);
console.log("orignal ", myArr); 
// does not include last range
// gives specific range
// dont effects orignal array

console.log("------------");
console.log("orignal  ", myArr);
const myn2 = myArr.splice(1,3)


console.log("splice ", myn2);
console.log("orignal ", myArr);
//remove the specific range
// manipules orignal array


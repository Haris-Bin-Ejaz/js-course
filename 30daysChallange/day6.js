// Day 6 | Arrays

//Activity 1

const arr = [1,2,3,4,5]

console.log(arr);

//console.log(`First Element is ${arr[0]} and Last is ${arr[arr.length-1]}`);

//-------------------------------------------

//Activity 2

arr.push(6)
// console.log(arr);


arr.pop()
// console.log(arr);


// console.log(`Removed element is ${arr.shift()}`);
// console.log(arr);


// console.log(`Length is now ${arr.unshift(1)}`);
// console.log(arr);


//-------------------------------------
// Activity 3

const mappedArr = arr.map((element,index)=>{

    //return arr[index] *= arr[index] // modify orignal arrray

    return element*element
    //does not modify orignal array
})

//console.log(mappedArr);
//console.log(arr);


const filteredArr = arr.filter((element)=>{

    if (element % 2 == 0){
        return element
    } 
})

//console.log(filteredArr);

const reducedArr =arr.reduce((prevVal, currentVal, currentIndex)=>{

return prevVal += currentVal
    
})

//console.log(reducedArr);

//-----------------------------------

//Activity 4

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);  
// }

// arr.forEach(function(element){console.log('for each element is',element)})

const multiDimenArr = [[1,2,3],[4,5,6],[7,8,9]]

//console.log(multiDimenArr);

// multiDimenArr.forEach(function(element){
//     console.log(element);
// })

//console.log(multiDimenArr.flat());


//console.log(multiDimenArr[2][2]);
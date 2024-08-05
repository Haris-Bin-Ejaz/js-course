//Activity 4

// only if type not equal to module

//const _ = require('lodash');


// const num = [1,2,3]

// const squareNum = _.map(num, (n)=> n*n)

// console.log(squareNum);


import _ from 'lodash'

// const num = [1,2,3]

// const squareNum = _.map(num, (n)=> n*n)

// console.log(squareNum);


// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const commonElements = _.intersection(arr1, arr2);
// console.log(commonElements); // [2, 3]


// const name = 'alice';
// const capitalized = _.capitalize(name);
// console.log(capitalized); // "Alice"


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

const bobIndex = _.findIndex(users, { name: 'Bob' });
console.log(bobIndex); // 1



/*
Certainly! Lodash is a powerful utility library for JavaScript that provides various functions to simplify common tasks. Here are some notable Lodash functions:

1. **Array Manipulation:**
   - `_.chunk(arr, size)`: Splits an array into chunks of a specified size¹.
   - `_.flatten(arr)`: Flattens a nested array into a single-level array.
   - `_.map(arr, callback)`: Creates a new array by applying a function to each element.
   - `_.filter(arr, predicate)`: Filters elements based on a condition.
   - And many more!

2. **Object Manipulation:**
   - `_.keys(obj)`: Returns an array of object keys.
   - `_.values(obj)`: Returns an array of object values.
   - `_.merge(obj1, obj2)`: Merges two objects deeply.
   - `_.isEqual(obj1, obj2)`: Compares two objects for equality.
   - And more!

3. **String Manipulation:**
   - `_.camelCase(str)`: Converts a string to camel case.
   - `_.kebabCase(str)`: Converts a string to kebab case.
   - `_.truncate(str, options)`: Truncates a string to a specified length.
   - And others!

4. **Utility Functions:**
   - `_.isEmpty(value)`: Checks if a value is empty (e.g., an empty array, object, or string).
   - `_.debounce(func, wait)`: Creates a debounced function that delays execution.
   - `_.throttle(func, wait)`: Creates a throttled function that limits execution rate.
   - And more!

Remember, Lodash's modular methods make it easy to work with collections, arrays, strings, and objects. Feel free to explore the full documentation for more details¹. If you have specific use cases or need further assistance, feel free to ask! 😊

*/
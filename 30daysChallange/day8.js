// Day 8 ES6 Features


//Activity 1
// const name = "abc"
// const age = 19

//const info = `hey its me ${name} am ${age} year old`

//console.log(info);

let multilineString = `This is a Multi line string
This is the Secondline of this string 
Hope so it will be like that`


//console.log(multilineString);


//-----------------------------------------
//Activity 2


//Array Destructuring
numAr = [1,2,3,4,5]

const [n1,n2] = numAr

//console.log(n1);


//Object Destructuring


obj1 = {
    name : '1st Property',
    age : 22,
    third : "3rd Property"
}

//const {name, age, third} = obj1
const {name,...all} = obj1


//console.log(`First property is ${name} 2nd is ${age} 3rd is ${third}`);
// console.log(name);
// console.log(all);

//------------------------------------------------------------------------
//Activity 3


// Spread Operator

arr3 = [...numAr, 1,2,3]

//console.log(arr3);


//rest operator


// function restOpp (...n1){
//     return n1.reduce((prev, current)=> prev+current)

// }

// function restOpp (...n1){

//     return n1.map((num)=> num*num)

// }

function restOpp (...n1){

    return n1.map((num)=> num+= num)

}

// rest arguments ARE IN ARRAY
// console.log(restOpp(1,2,3,4));


//............................................
//Activity 4


function product(n1, n2 = 2 ){

    return n1 * n2
}


// console.log(product(5));

// console.log(product(5,4));


//............................................
//Activity 5

// Object Literals

const oProp1 = "Name"
const oProp2 = 22
const oProp3 = function (){console.log("Am a function expression");}

const person = {oProp1,oProp2,oProp3}

// console.log(person);
//console.log(person.oProp1);

//Old 
const objOld = {
    p1 : "Prop 1",
    p2 : "Prop 2",
    p3 : function (paramenter1, parmeter2){
        return paramenter1 + parmeter2
    }
}

//New Method
const objNew = {
    p1 : "Prop 1",
    p2 : "Prop 2",
    p3 (paramenter1, parmeter2){
        return paramenter1 + parmeter2
    }
}


// console.log(obj3.p3(5,5));


//parameter as property Name aka (computed property name)

const propertyVar = "External_var_Prop"

const varPropObj = {
    [propertyVar] : "Yes iam"
}

// console.log(varPropObj.External_var_Prop);


//Method as Objects

function Student(name, age){
    this.name = name
    this.age = age
}

student1  = new Student('Std1' , 22)

console.log(student1);

function createStudent(name, age){
    return {
    name : name,
    age : age
    }
}

student2 = createStudent("rSTD1", 22)

console.log(student2);

let myName = 'Haris    '

//console.log(myName.length);

//console.log(myName.trim().length);




let myheros = ['thor', 'spiderman'] 

let heroPower = {
    thor: 'hammer',
    spider: 'sling',

    getSpiderPower : function(){
        console.log(`Spider Power is : ${this.spider}`);
    }
}

Object.prototype.haris = function(){
    console.log(`Haris is presert in everything`);
}

Array.prototype.heyharis = function(){
    console.log(`Haris say hello`);
}

//myheros.haris()
//myheros.heyharis()
//heroPower.heyharis()


// myName.haris()

const user = {
    name: 'chai',
    email : "Chai@gmail.com"
}

const teacher = {
    makeVideo : true
    
}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS ssignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Prototypel Inheritance
//-----------------------------------------


//Modern Syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anotherUsername = '  Chai or Code     '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
'haris'.trueLength()
'Ice Cream'.trueLength()


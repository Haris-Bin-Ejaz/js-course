// const user  = {
//     username : 'Haris',
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         //console.log("Got User Details");

//         //console.log(`Ùsername: ${this.username}`);

//         //return `Ùsername: ${this.username}`

//         //console.log(this);
//     }
// }

//console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

// ---------------------------Object Literal till now-------------


// ----------Constructors now --------------


// const promiseOne = new Promise()

//const date = new Date()



function userF( username, loginCount, isLoggedIn ) {

    // this.Variable = Parameter
    this.username= username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome : ${this.username}`);
    }

    return this
}

const userOne = new userF("haris",12,true)
const userTw0 = new userF("haris2",123,true)

// New keyword create a new instance(object)
// new keyword call constructor function
//arguments are injected through this keyword

console.log(userOne.constructor);
//console.log(userTw0);

// instanceOf
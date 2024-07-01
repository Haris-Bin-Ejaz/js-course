//ES6

// class User {

//     constructor(username, email, password){
//          this.username = username
//          this.email = email
//          this.password = password
        
//     }

//     encryptyPassword(){
//         return `${this.password}abcd`
//     }

//     changeUserName (){
//         return `${this.username.toUpperCase()}`
//     }

// }

//const chai = new User('Haris',"Haris123@email.com",'abc')

//console.log(chai.encryptyPassword());
//console.log(chai.changeUserName());

// ....................................................
//// Behind the scene

// function User (username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abcd`
// }

// User.prototype.changeUserName = function(){
//    return `${this.username.toUpperCase()}`
// }

// const tea = new User('Haris',"Haris123@email.com",'abc')

// console.log(tea.encryptPassword());
// console.log(tea.changeUserName());

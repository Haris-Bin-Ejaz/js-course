class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){

        super(username)

        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`New Course is added by ${this.username}`);
    }

}

const chai = new Teacher('Chai',"chai@gmail.com", 'abc')

chai.addCourses()
chai.logMe()

const masalaChai = new User('Masala Chai')

masalaChai.logMe()

// console.log(chai === masalaChai);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);
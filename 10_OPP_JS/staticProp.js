class User{
    constructor(Username){

        this.Username =Username

    }

    logMe(){
        console.log(`Username : ${this.Username}`);
    }

    static createId(){
        return `123`
    }
}

const haris = new User('haris')

//console.log(haris.createId())

class Teacher extends User{

    constructor(Username, email){
        super(Username)
        this.email = email
    }
    
}

const iphone = new Teacher('Iphone','I@phone.com')

iphone.logMe()

console.log(iphone.createId());

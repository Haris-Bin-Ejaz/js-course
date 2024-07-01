class user{
    constructor(email,password){
        this.email =email
        this.password =password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(email){

        this._email = email.toLowerCase()

    }

    get password(){
        return `${this._password}HEHEHE`
    }


    set password(password){

        

        this._password = password
    }

}

const haris = new user ('haris@email.com','ABC')

console.log(haris.email);
console.log(haris.password);
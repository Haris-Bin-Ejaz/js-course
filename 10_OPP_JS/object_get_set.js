const User = {
    _email : 'haris',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// factory function Object()
const Tea = Object.create(User)

console.log(Tea.email);

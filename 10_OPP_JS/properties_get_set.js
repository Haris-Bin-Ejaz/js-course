// defining properties

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){

            return this._email.toUpperCase()

        },
        set : function(value){

            this.email = value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){

            return this._password.toUpperCase().concat('HEHE')

        },
        set : function(value){

            this.password = value
        }
    })
}
/// Method 2 gettor Settors

const haris = new User('haris@email.com',"abc")

console.log(haris.email);
console.log(haris.password);

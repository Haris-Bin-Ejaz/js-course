console.log("Arrow Functions");

const user  = {
    username : "Haris",
    age : 23,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
    
    }


}

// user.welcomeMessage()

// user.username = "New User"

// user.welcomeMessage()

//console.log(this);


// Arrow Function

// function chai(){
//     let haris = "Haris"
//     console.log(this.haris) undefined error
// }

//chai()


function chai1(){
    let abc = "abc"
    //console.log(this.abc);
    console.log(this);
} //error undefiend


const chai = () => {
    let abc = "abc"
    console.log(this.abc);
    console.log(this);
}

//chai1()
//chai()


const arrow2 = (n1, n2) => {
    return n1+n2
}

//console.log(arrow2(5,6));



//const arrowImplicit = (n1, n2) => (n1+n2)
// single line function dont need curly braces and return keyword
// impicit return

// const arrowImplicit = (n1, n2) => n1+n2
// // single line function dont need curly braces and return keyword
// // impicit return




// const arrowImplicit = (n1, n2) => ({value:"Abc"})
// // object need parenthesis 



// console.log(arrowImplicit(7,9393));

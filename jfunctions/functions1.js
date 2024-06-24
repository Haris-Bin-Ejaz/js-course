console.log("Java Script Functions\n");

function f1 (){
    console.log("First Function");
}

//f1()

function ajeeb (n1, n2){
    console.log(n1 + n2);
}


function ajeeb2 (n1, n2){
    //let result = n1 + n2;
   //return result 

   return n1 + n2;
}


// ajeeb(3,"a");


// console.log(`result of Ajeeb : ${ajeeb(1,"a")}`);

// console.log(`result of Ajeeb2 ${ajeeb2(1,"a")}`);

// console.log(`result2 of Ajeeb2 ${ajeeb2(1,"3")}`);

//-----------------------------------------------------------



function loginUsermsg (username){
    return `${username} just loggedin`
}

//console.log(loginUsermsg("Haris"));
//console.log(loginUsermsg());


function loginUsermsg2 (username){
    if(username === undefined){
        console.log("Please Enter a user name");
        return
    }
    return `${username} just loggedin`
}

//console.log(loginUsermsg2("Haris"));
//console.log(loginUsermsg2());



function loginUsermsg3 (username){
    if(!username){
        console.log("Please Enter a user name");
        return
    }
    return `${username} just loggedin`
}

//console.log(loginUsermsg3("Haris"));
//console.log(loginUsermsg3());


function loginUsermsg4 (username = "Guest"){
    if(!username){
        console.log("Please Enter a user name");
        return
    }
    return `${username} just loggedin`
}

//console.log(loginUsermsg3("Haris"));
console.log(loginUsermsg4());





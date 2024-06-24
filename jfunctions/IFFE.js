console.log("Immidiately Invoked Function Expression\n");


function chai(){
    console.log("DB Connected");
}

//iffi
(function chai(){
    console.log("DB Connected");
})();

//chai()

//iffi ()()
//avoid global scope variable pollutions' 
//immidiately executed


(function chaiorCode()
// this is named iffe
{console.log("DB Connection Two");})();

(() => {console.log("DB Connection Three");})();

(
    //unnamed iffe
    (name) => {console.log(`Hey ${name}`);})("haris")

//if two iffe exits first one needs to be end with semicolon;

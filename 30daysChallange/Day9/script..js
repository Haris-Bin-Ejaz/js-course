//Day 9 | DOM Manipulation

// Activity 1

let elementToChange = document.getElementById("Activtiy1")

    elementToChange.innerHTML = "Demo Element Changed"

let elementToChange2 = document.getElementsByClassName("Activity1")

//console.log(elementToChange2); 

for (let i = 0; i < elementToChange2.length; i++) {
   elementToChange2[i].style.backgroundColor = "red";
   elementToChange2[i].style.margin = "5px";
   elementToChange2[i].style.padding = "5px";
   elementToChange2[i].style.display = "flex";


}

// Becasue getElementsbyClass Returns HtmlCollection

//-----------------------------------------------------------------------------------

//Activity 2

let div1 = document.createElement('div')
div1.className = "Activity2"
div1.style.margin = "5px"
div1.style.backgroundColor = "Yellow"
div1.style.padding = "5px"
div1.style.display = 'flex'
const addText = document.createTextNode("Added Through Js")
div1.appendChild(addText)
document.body.appendChild(div1)


let li = document.createElement("li")
text = document.createTextNode("Added through js")
li.appendChild(text)
let ul = document.querySelector('ul')
ul.appendChild(li)

let li2 = document.createElement("li")
text2 = document.createTextNode("Added through js 2")
li2.appendChild(text2)
let ul2 = document.querySelector('ul')
ul.appendChild(li2)

//---------------------------------------------------------
//Activity 3
let elementToDelete = document.querySelector("li:last-child")

console.log(elementToDelete);

// elementToDelete.parentNode.removeChild(elementToDelete)

// or 

elementToDelete.remove()

//--------------------------------------------
//Activity 4

let img = document.querySelector("#imagetoSelect")
//console.log(img);
img.setAttribute("src", 'https://img.freepik.com/free-photo/handshake-icon-concept-partnership-agreement_107791-16725.jpg?w=740&t=st=1722216623~exp=1722217223~hmac=803b41d7a0edcb5f4fd1b130b74ca053c4fb2df14f71fadf4c0c1662c2fb47a7')
img.style.height = "100px"
img.style.width = "120px"

let targetElement = document.querySelector('.toBeReomved')
// console.log(targetElement);
// targetElement.removeAttribute("class")
// console.log(targetElement);

//or

targetElement.classList.remove("toBeReomved")
// let img2 = document.querySelector(".toBeReomved")
// console.log(img2);

//Activity 5

let button = document.querySelector(".targetBtn")
let p = document.querySelector('.targetP')

//console.log(p);
button.innerHTML = "Click to Change"
button.addEventListener('click', ()=> {
    
    p.innerHTML = "I am changed by Button Click"

})

let div2 = document.querySelector(".targetDiv2")
div2.style.padding = "5px"
div2.style.margin = "5px"

div2.addEventListener('mouseover', ()=> {

   div2.style.border = "2px solid black";
   div2.style.borderRadius = "5px"

})

div2.addEventListener('mouseout', ()=> {

   div2.style.border = "none";
   div2.style.borderRadius = "5px"

})


// Day 10 Event Handlers


// Activity 1
let p = document.querySelector(".targetP")
let btn = document.querySelector(".targetBtn")
let isHover = false
let pText = p.innerHTML
let btnText = btn.innerHTML
let isClicked = false

console.log(pText);


function applyStyle(element){
    
    element.style.backgroundColor = "Yellow"
    element.style.margin = "5px"
    element.style.padding = "5px"
    element.style.border = "2px solid black"
    element.style.borderRadius = "5px"
    element.style.maxHeight = '62px'
    element.style.maxWidth = '62px'


    element.style.display = 'inline-block';
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    }

btn.addEventListener('click', () => {
    p.innerHTML = "Button is Clicked"
    isClicked = true
})

btn.addEventListener('mouseover', () => {

    if(!isHover){
        p.innerHTML = "Button is Howered"
        btn.innerHTML = "Howered"

        applyStyle(p)
   

    }
    isHover = true
})


btn.addEventListener('mouseout', () => {

    if(isHover && !isClicked){
        p.innerHTML = pText

        if(!isClicked)
        btn.innerHTML = btnText
        p.removeAttribute('style')
    }

    else if(isClicked){
        btn.innerHTML = btnText
        p.innerHTML = "Button is Clicked"
    }


    isHover = false
})



//-------------

img = document.querySelector(".targetImg")
img.style.height = "60px"
img.style.width = "60px"

// img.addEventListener('dblclick', ()=> {
   
//         img.style.display = "none"; // Hide the image
    
// })

//or

// img.addEventListener('dblclick', ()=> {
   
//     if (img.style.opacity === "1") {

//         img.style.opacity = "0.1"; // Set opacity to 50%
    
//     } else {
//         img.style.opacity = "1"; // Set opacity to 100%
//     }
    
// })



//Activity 2



let div2 = document.querySelector('.targetDiv2')

function applyDefault(element){
    element.style.display = 'inline-block';
    element.style.margin = "5px"
    element.style.padding = "5px"
    }

    applyDefault(div2)



div2.addEventListener('mouseover' , ()=>{

    applyStyle(div2)

})

div2.addEventListener('mouseout' , ()=>{

    div2.removeAttribute('style')
    applyDefault(div2)

})


//--------------------------------------------------------

//Activity 3

inputField = document.querySelector("#targetInpt")
p2 = document.querySelector(".targetP2")

inputField.addEventListener('keydown', (E)=>{

    console.log(E.key);
})

inputField.addEventListener('keyup', (E)=>{


    p2.innerHTML = inputField.value

})


//---------------------------------------------------------------
// Activity 4

form = document.querySelector('#targetForm')
fields = document.querySelectorAll("#targetForm input")
//console.log(fields);

fields.forEach((field)=> {
    applyStyle(field); 
    applyDefault(field)
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fields.forEach((field) => {console.log(field.value);})
})

//------------------------------

let dropDown = document.querySelector("#targetSelect")

applyDefault(dropDown)
//applyStyle(dropDown)

let dropDownTargetP = document.querySelector('#targetDDP')

applyDefault(dropDownTargetP)
applyStyle(dropDownTargetP)


dropDown.addEventListener('change',()=> {

    dropDownTargetP.innerHTML = dropDown.value

})

//-------------------------------------------------------------------
//Activity 5

function selectAllItems(){

    for(let i = 1 ; i <= 5 ; i ++){

        let liDemo = document.querySelector(`#targetLi${i}`)
        applyDefault(liDemo)
        applyStyle(liDemo)

    }

}

selectAllItems()
let ul = document.querySelector("#targetUl")
let li1 = document.querySelector("#targetLi1")

ul.addEventListener("click", (e)=>{
    console.log(e.target.innerHTML, "Parent");
}) 

li1.addEventListener("click", (e)=>{
    console.log(e.target.innerHTML);
    //console.log(e.target.parentNode);
   e.stopPropagation()
}) 


//-----------------------------

let dynamicDiv = document.querySelector('.dynamicDiv')
let dynamicDivChild = document.querySelector('#dynamicDivChild')
let dynamicBtnAdd = document.querySelector("#dynamicBtnAdd")
let dynamicBtnRemove = document.querySelector("#dynamicBtnRemove")
let counter = 1
let selectedElement = null


applyDefault(dynamicDiv)
applyDefault(dynamicDivChild)
applyDefault(dynamicBtnAdd)
applyDefault(dynamicBtnRemove)

dynamicBtnAdd.addEventListener('click', (e)=>{

    let dynamicP = document.createElement('p')
    let text = document.createTextNode(`Dynamic Paragraph ${counter}`)
    dynamicP.appendChild(text)
    dynamicDivChild.appendChild(dynamicP)
    counter += 1
    //e.stopPropagation
})


dynamicBtnRemove.addEventListener('click', (e)=>{

    if(selectedElement == dynamicDivChild){
    
        alert(`You cannot delete ${selectedElement}`)
    }

    else{
        selectedElement.remove()
    }

    
    
})

dynamicDivChild.addEventListener('click', (e)=> {

console.log(e.target.innerHTML);

selectedElement = e.target


})








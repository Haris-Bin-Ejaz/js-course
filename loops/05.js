console.log("For Each Lopps for array\n");

const proArr = ["JS","PY","RB","CPP"]

// take call back function, a function without name

// proArr.forEach( function(item){
//     console.log(item);
// })

// proArr.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// proArr.forEach(printMe)


// proArr.forEach( (item,index,arr)=> 
//     {
//         console.log(item,index,arr);
//     })


const myCoding = [
    {
        lanName : "Javascript",
        lanFileName : "js"
    },
    {
        lanName : "Python",
        lanFileName : "py"
    },
    {
        lanName : "C++",
        lanFileName : "cpp"
    },
    
]

myCoding.forEach(
     (item) => 
        {
            console.log(item.lanName);
        }
 )
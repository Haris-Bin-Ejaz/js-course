console.log("Reduce in Javascript\n");
 
//take a initial value
// return a single reduced value


const myNums = [1,2,3]

//example with simple function
// const total = myNums.reduce
// ( 
//     function(accumulator, currentValue)
// {
//     console.log(`${accumulator} + ${currentValue} `);
//     return accumulator + currentValue
// },  0)

//-------------------------------------------------
//example with simple function
//const total = myNums.reduce(( acc, curr) => acc + curr,0)

//console.log(total);


const shoppingCart = 
[
    {
        itemName : "Js-Course",
        price: 2999
    },
    
    {
        itemName : "Python Course",
        price: 2999
    },
    
    {
        itemName : "Mobile App Development",
        price: 4999
    }

]

const priceToPay = shoppingCart.reduce( (acc,curr) => acc + curr.price,0)

console.log(priceToPay);
//Day 7 | Objects


//Activity 1

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  // Log the book object to the console
//console.log("Book details:");
//console.log("Title:", book.title);
//console.log("Author:", book.author);
//console.log("Year:", book.year);


//-----------------------------------------------------------

//Activity 2


book.display = function(){

  return `The Book ${this.title} is Written by ${this.author} in ${this.year}`
}
//console.log(book.display());


book.updateYear = function(year){
  this.year= year
}

book.updateYear(1926)

//console.log(book.display());

//-----------------------------------------------------------

//Activity 3

let Library = {
  name : "My Library",
  books : [
    {
      title: "The Great Gatsby 1",
      author: "F. Scott Fitzgerald",
      year: 1925
    },
    {
      title: "The Great Gatsby 2",
      author: "F. Scott Fitzgerald",
      year: 1926
    },
    {
      title: "The Great Gatsby 3",
      author: "F. Scott Fitzgerald",
      year: 1927
    }
  ]
}

//method 1
Library.displayAll = function(){
  console.log(Library.name);
  for (const books of Library.books) {

    console.log(books.title);
  }
}

//method 2
Library.displayAll2 = function(){
  console.log(Library.name);

  this.books.forEach(books => {
    console.log(books.title)
  })

}

//method 3
Library.displayAll3 = function(){
  console.log(Library.name);

  this.books.forEach((book)=>{
    console.log(book.title);
  })

}

  

//Library.displayAll3()

//-----------------------------------------------------------

//Activity 4 This keyword


//-----------------------------------------------------------

//Activity 5

// for (const props in book) {

//   if(typeof book[props] === 'function'){
//     continue
//   }
  
//   else{
//     console.log(`Property : ${props} | Value : ${book[props]}`);
//   }
  
// }

//

let keys = Object.keys(book).filter((key)=>{return typeof book[key] != 'function' })
//console.log(keys);

let values = Object.values(book).filter((value)=>{return typeof value !== 'function' })

console.log(values);










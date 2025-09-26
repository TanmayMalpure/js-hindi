// Preamitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

// const bigNumber = 1465161465165146n
// console.log(bigNumber)


//Referance (Non primitive)

//Array, Objects , functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "Tanmay",
    age: 21,
}

const myFunction = function(){
    console.log(("Hello world")); 
}

console.log(typeof heros);




// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "tanmaymalpurecom"



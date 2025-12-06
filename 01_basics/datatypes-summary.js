//  # Primitive 

// 7 types: String ,Number , Boolean, null , undefind, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 12345678956451n


// Reference (Non primitive)

//Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Tanmay",
    age: 21,
    email: "tanmaymalpure9@gmail.com"
}

const myFunction = function() {
    console.log("Hello World");
    
}

// console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++  Mermory  +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Tanmaydotcom"
anothername = "Tanmaymalpure"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "tanmaymalpure9@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanmay@google.com"

console.log(userOne.email);
console.log(userTwo.email);




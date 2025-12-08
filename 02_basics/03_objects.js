// singleton

// Object literals

//Object.create

const mySym = Symbol("key1")

const JsUser ={
    name: "Tanmay",
    "Full name" : "Tanmay Malpure",
    age: 18,
    location: "Jaipur",
    [mySym]: "myKey1",
    email: "tanmaymapure9@gmail.com",
    isLoggedIn: true,
    lastLogginDay: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "my@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "microsoft@gmail.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
    
}

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());







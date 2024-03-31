// Primitive Data type (call-by value):

// Types:
const score = 100                       // Number -> integer values
const scoreValue = 100.3                // Number -> decimal values

const isLoggedIn = false;               // Boolean Type
const outsideTemp = null;               // Null type
let userEmail;                          // Undefined

const id = Symbol('12345');             // Symbol type (used for keeping the value unique)
const anotherId = Symbol('12345');
console.log(id === anotherId);          // output: false. Even though the values are same but the Symbol type returns unique numbers

const bigNumber = 43983938893498359n    // Number -> BigInt values; "n" is used in the end to let the JavaScript know that it has BigInt values.



console.log("---------------------------");
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log("---------------------------");


// Non-Primitive Data type (reference type):

// Types:
// Array type:
const heros = ["shaktiman", "naagraj", "doga"];

// Objects:
let myObject = {
    name: "Venkat Raja Ch",
    age: 24
}

// Functions:
const printHelloWorldFunction = function(){
    console.log("Hello World!");
}

// Typeof Operator is used to find the data type.
// Documentation Link: https://262.ecma-international.org/13.0/#sec-typeof-operator
console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof printHelloWorldFunction);
console.log("---------------------------\n");



// =================================== STACK & HEAP MEMORY =================================== //

// Stack Memory (Primitive Data Tyep) and Heap Memory (Non-Primitive Data Type)
console.log("Functioning of Stack Memory examples:");

// Examples: Using Primitive data types
let myYouTubeName = "freeCodeCamp"
console.log("myYouTubeName: ", myYouTubeName);

let anotherYouTubeName = myYouTubeName
console.log("performing operation -> anotherYouTubeName = myYouTubeName ")
console.log("anotherYouTubeName: ", anotherYouTubeName);

anotherYouTubeName = "codeHelp.in"
console.log("updating the variable 'anotherYouTubeName' by performing operation -> anotherYouTubeName = 'codeHelp.in'");
console.log("anotherYouTubeName: ", anotherYouTubeName);



// Example: Using Heap Memory
console.log("\n")
console.log("Functioning of Heap Memory examples:")
let userOne = {
    name: "Venkat Raja Ch",
    email: "chvenkatraja.work@gmail.com",
    upi: "upiid@ybl"
}
console.log("User One Object", userOne);

let userTwo = userOne
console.log("Performing operation, creating another variable and assigning userOne -> let userTwo = userOne");
console.log("printing userTwo: ", userTwo);

console.log("Updating email address of userTwo -> userTwo.email='changedEmail@email.com'")
userTwo.email="changedEmail@email.com"

console.log("Printing userOne and userTwo email address: ");
console.log("userOne.email = ", userOne.email);
console.log("userTwo.email = ", userTwo.email);
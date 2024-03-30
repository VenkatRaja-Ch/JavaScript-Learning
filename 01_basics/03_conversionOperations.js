let score = 33

console.log(typeof score); // one way
console.log(typeof(score)); // another way of using typeof()

score1 = "33"
console.log(typeof score1);
let valueInNumber = Number(score1);
console.log(typeof score1);
console.log(typeof valueInNumber);

// Confusion
// Case 1: String conversions
let score2 = "33abc"
let valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1); // this will convert it into a number format.
console.log(valueInNumber1);    // the value which is converted is not a number. As "33abc" is not a number and hence it will output NaN -> "Not a Number".

// Case 2: Undefined conversions
let score3 = undefined
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2); 
console.log(valueInNumber2); // this will throw an output of NaN.

// Case 3: Null conversions
let score4 = null
let valueInNumber3 = Number(score4);
console.log(typeof valueInNumber3); 
console.log(valueInNumber3); // this will throw an output 0. Rember for the case in which you're doing the comaparing with 0, as if you convert null into number it will result the output to 0 that can affect the comparision.

// Case 4: Boolean conversions
let score5 = true
let valueInNumber4 = Number(score5);
console.log(typeof valueInNumber4); 
console.log(valueInNumber4); // this will throw an output of NaN.


/*

"33" => 33
"33abc" => NaN
true => 1; false => 0

*/

// Converting Number (which is boolean equivalent)
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// Case 1: Empty String
let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);    // This will output false

// Case 2: Strings
let isLoggedIn2 = "Venkat"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);  // This will output true


let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof someNumber)  // converts it into string
console.log(someNumber);    // outputs 33
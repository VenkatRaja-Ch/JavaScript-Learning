let score = 33

console.log(typeof score); // one way
console.log(typeof(score)); // another way of using typeof()

let score1 = "33"
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


// *************************** Operations *************************** //

let value = 3
let negativeValue = -value
console.log(negativeValue);

// other operations
console.log("sum: ", 2+2);
console.log("difference: ", 2-0);
console.log("Multiplication: ", 2*2);
console.log("Division/ Quotient: ", 10/2);
console.log("Modulo/ Remainder: ", 10%2);

let str1 = "Hello"
let str2 = " Venkat!"

let str3 = str1 + str2
console.log(str3);

// Now tricky part:
// Reference Note: tc39.es -> documentation -> Abstract Operation -> 7.1 Type Conversion
// Link: https://tc39.es/ecma262/#sec-type-conversion
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// For now, if the string is first then everything will be treated as string.
// If, there is number first, then first it will be treated as a number and then if there is string then the entire thing
    // will be converted into string.



// More tricky conversion:
console.log(true);
console.log(true + true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // don't do it, code should be more readable.


// another case
let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// Prefix and Postfix Operator
// Documentation: MDN -> Opearators -> Increament.
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
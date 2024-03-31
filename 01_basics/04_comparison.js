// Basic comparison
// The output of these operations will be either true or false.
console.log(2 > 1);     // greater than operator
console.log(2 >= 1);    // greaater than or equal to operator
console.log(1 < 2);     // lesser than operator
console.log(1 <= 2);    // lesser than or equal to operator
console.log(2 == 1);    // equal to operator
console.log(2 != 1);    // not equal to operator

console.log("--------------");
// The tricky part comes, when you do not compare the same data types with each other.
console.log("2" > 1);
console.log("02" > 1);
// NOTE: the problem with these type of conversions is that you cannot predict the results.


console.log("--------------");
console.log(null > 0);  // (1)
console.log(null == 0); // (2)
console.log(null >= 0); // (3)
/**
 * The reason is that an quality check == and comparisons > < >= <= works differently.
 * Comparisons convert null to a number, treating it as 0.
 * That is why (3) null >= 0 is true and (1) null > 0 is false.
 * 
 * The working of "==" and "===" is also different.
 * While working of the comparison operators are different at the same time.
 */


console.log("--------------");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


console.log("--------------");
// "===" strict check
// Note: it not only checks the number but rather the data type as well
console.log(`"2" == 2: ${"2" == 2}`);
console.log(`"2" === 2: ${"2" === 2}`);
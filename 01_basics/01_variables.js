const accountId = 144554;     
let accountEmail = "chvenkatraja.work@gmail.com";
var accountPassword = "12345";
accountCity = "Jamshedpur"; // possible to assign a variable but it is not the best practise of it.
let accountState;

// accountId = 23;
console.log(accountId);

accountEmail = "changedEmail@email.com";
accountPassword = "121212121";
accountCity = "Jharkhand";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// This is an example of using a single line comment.


/*
This is an example of multi-line comment.
Note: Prefer not to use var
because it creates an issue in block scope and functional scope
Use let instead of it.
*/
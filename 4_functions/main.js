/*
- function: A block of reusable code. Declare code once and use it whenever you want.
- Declare a function once and use whenever you want.
- parameters, arguements, return type

- Variable scope: Where a variable is recognized and accessible (local and global).
*/

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(31));


function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("omondikens@gmail.com"));
console.log(isValidEmail("issss"));
console.log(isValidEmail("dickens.onyango@gmail.com"));


// NB: When inside a function we will use any local instance of a variable first, if it is not found we look at the global scope
let x = 10
let y = 11;

function function1() {
    let x = 20;
    console.log(x);
    console.log(y)
}

function1();
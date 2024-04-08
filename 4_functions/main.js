/*
- function: A block of reusable code. Declare code once and use it whenever you want.
- Declare a function once and use whenever you want.
- parameters, arguements, return type
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
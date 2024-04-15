/*
 - function declaration: Defining a reusable block of code that perform a specific task.
 - function expression: A way to define functions as values or variables.
 - Benefits of function expression:
    1. We don't have to think of function names. We are no polluting the global name space with function names.
 - Function expression are used in:
    1. Callbacks in asynchronous operations
    2. Higher Order Functions
    3. Closures
    4. Event Listeners
*/


// function as a varibale
const sayHello = function (name) {
    console.log(`Hello ${name}. Good to see you`);
}

sayHello('Onyango Dickens');


// function as a value
setTimeout(function() {
    console.log('Wagwan Wadau');
}, 4000)


const numbers = [10, 20, 30, 40, 50, 60];

const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
})

console.log(squares);

const evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNumbers);


const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
});

console.log(total);


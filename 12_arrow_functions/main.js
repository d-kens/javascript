/*
    - Arrow functions: A concise way to write function expressions. Good for simple function that you use only once.
    - Syntax: (parameter) => some code
*/

const sayHello = (name, age) => { console.log(`Hello ${name}`) 
                                  console.log(`You are ${age} old`)
                                };

sayHello('Onyango Dickens', 56)


setTimeout(() => console.log('Hello'), 4000);

const numbers = [10, 20, 30, 40, 50, 60];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);
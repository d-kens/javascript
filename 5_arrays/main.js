/*
    - Array - a variable like structure that cna hold more than one value
    - push(element), pop(), unshift(element), shift(), length, indexOf(element)
    - looping through array elements: normal for loop, enhanced for loop
    - sort(), sort().reverse()
*/


let fruits = ["Mango", "Apple", "Banana", "Orange", "Pears"];

console.log(fruits);

// accessing an array element
console.log(fruits[4]);
console.log(fruits[2]);

// setting a array element
fruits[0] = "Coconut"
console.log(fruits[0])

// add element at the end of the array
fruits.push("Guava");
console.log(fruits);

// remove an element at the end of the array
fruits.pop()
console.log(fruits);

// add an element at the beginning of an array
fruits.unshift('Guava');
console.log(fruits);

// remove an element form the beginning of an array
fruits.shift();
console.log(fruits);


// get the lenth of an array
let numOfFruits = fruits.length;
console.log(numOfFruits);

// lookup the index of an element
let index = fruits.indexOf('Apple');
console.log(index);


// loop throught array elements and display trhem
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("In reverse order")

// loop through the array elements and display in reverse order
for(let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

console.log("Using an enhanced for loop")

fruits.sort().reverse();

for(let fruit of fruits) {
    console.log(fruit)
}

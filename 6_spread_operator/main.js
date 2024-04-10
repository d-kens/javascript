/*
    - spread operator (...): Allows an iterable such an array or a string to be expanded into separate elements (unpack the elements)
    - It allows us to
        1. Spread an iterable into individual elements.
        2. Make a shallow copy of an array. A shallow is another variable that contains identical elements. 
        3. Combine two or more arrays.
        4. A new element can also be appended while upancking an iterable (array or string);
*/

// Array - spread an array into individual element
let numbers = [33, 29, 54, 101, 13, 87, 90];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// String - spread a string into letter.
let username = "Onyango Dickens Omondi";
let letters = [...username];
let lettersJoined = letters.join('-'); // join the letters array elements back into a string with a '-' between each letter. 
console.log(letters);
console.log(lettersJoined);


// make a shallow copy of an array using spread operator
let fruits = ["Mango", "Apple", "Orange", "Banana", "Avocado", "Pears"];
let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);


// combine two or more arrays using the spread operator
let vegetables = ["Carrots", "Celery", "Potatoes", "Sukuma Wiki"];
let foods = [...fruits, ...vegetables];
console.log(foods);

// append a new element while unpacking.
let newFoods = [...foods, "eggs", "milk"];
console.log(newFoods);


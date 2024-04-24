/*
 Array of objects.
 - What you can do with them
    1. pop
    2. push
    3. splice
    4. map
    5. filter
    6. reduce
    7. forEach
*/


const fruits = [
    {
        name: "apple",
        color: "red",
        calories: 95
    },
    {
        name: "orange",
        color: "orange",
        calories: 45
    },
    {
        name: "banana",
        color: "yellow",
        calories: 105
    },
    {
        name: "coconut",
        color: "white",
        calories: 159
    },
    {
        name: "pinapple",
        color: "yellow",
        calories: 37
    }
]

console.log(fruits[0].name); // name of the first object

fruits.push({name: "grapes", color: "purple", calories: 62}); // add element at the end 
console.log(fruits);

fruits.pop(); // remove element at the end
console.log(fruits);

fruits.splice(1,2) // remove elements at certain indices
console.log(fruits);

// forEach 
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));

// map
fruits.map(fruit => console.log(fruit.calories));

// filter - creates a new array by filtering elements. 
const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');
const lowCaloryFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCaloryFruits);

// reduce - Returns a single value. Reduce array elemets to a sigle value
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(maxFruit);
console.log(maxFruit.calories)
console.log(maxFruit.name);

console.log(minFruit);
console.log(minFruit.calories);
console.log(minFruit.name);




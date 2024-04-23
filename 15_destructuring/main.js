/*
    - Destructuring - Extract values from arrays and objects the assign them to variables in a convinient way.
    - [] = used to perform array destructuring
    - {} = used to perform object detructuring
    - Examples
       1. Swap two variables.
       2. Swap 2 elements of an array.
       3. Assign array elements to variables.
       4. Extract value from objects
       5. Detructuring in function parameters
*/

// SWAP 2 VARIABLES
let x = 23;
let y = 13;

[x, y] = [y, x];

console.log(x);
console.log(y);

// SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[2]] = [colors[2], colors[0]]; // swap red and blue
console.log(colors);

// ASSIGN ARRAY ELEMENTS TO VARIABLES, ALSO COMBINING REST WITH ARRAY DESTRUCTURING
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstname: "Onyango",
    lastname: "Dickens",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 34
}


const {firstname, lastname, age, job = "Unemployed"} = person1; // set job to a default value.
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);


// DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstname, lastname, age, job = "unemployed"}) {
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`)
}

displayPerson(person1);
displayPerson(person2);
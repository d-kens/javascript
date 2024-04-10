/*
    - rest parameters: Allows a function to work with a variable number of arguements by bundling them into an array.
    - Rest parameter can used to:
        1. Bundle separate elements into an array.
        2. Find the sum/average of a variable number of arguements.
        3. To combine strings together.
*/

// Bundle separate elements into an array.
function openFridge(...foods) { // rest parameter.

    // print the food array
    // the separate elements were bundled into array
    console.log(foods);

    // print individual elements
    console.log(...foods); // spread operator
}

openFridge("pizza", "ramen", "hambugger", "hotdog", "sushi");



// Find the sum/average of a variable number of arguements.
function sum(...values) {
    let total = 0;

    for(let value of values) {
        total += value;
    }

    return total;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Your total is: ${total}`);

// To combine strings together.
function combineString(...strings) {
    return strings.join(" ");
}

const fullname = combineString("Mr.", "Onyango", "Dickens", "Omondi");
console.log(fullname);
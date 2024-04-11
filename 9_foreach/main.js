/*
    - forEach(): A method use to iterate over the elements of an array and apply a specified function (callback) to each element.
    - Useful when you want to apply a function to each element of the array.

    - array.forEach(callback)
        element, index and array are provided automatically

*/

let numbers = [1, 2, 3, 4, 5];

function display(element) {
    console.log(element);
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2)
}

numbers.forEach(square);
numbers.forEach(display);


let fruits = ["mango", "apple", "orange", "banana"];

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);

/*
    - map = accepts a callback function then applies that function to each element of an array, then retuns a new array.
    - map method is very similar to the forEach method but after completion, the map method returns a new array (does not change the original array)
    whle forEach changes the original array.
*/
const numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);

console.log(squares)
console.log(numbers)

function square(element) {
    return Math.pow(element, 2)
}



const students = ["onyango", "dickens", "omondi", "luke", "enos", "jane", "achola", "sijenyi"];

const studentsUpper = students.map(upperCase);

console.log(students);
console.log(studentsUpper);


function upperCase(element) {
    return element.toUpperCase();
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formatedDates = dates.map(formatDate);

console.log(dates);
console.log(formatedDates)


function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
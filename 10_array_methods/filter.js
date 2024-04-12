/*
    - filter(): creates a new array by filtering elements.
    - It applies a function (callback funtion) to the each elemets in the original array. Returns a new array
    containing only elements that retun true.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
    return element % 2 === 0;
}   

function isOdd(element) {
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element) {
    return element >= 18;
}


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shorWords = words.filter(getShortWOrds);

console.log(shorWords);

function getShortWOrds(element) {
    return element.length <= 6;
}
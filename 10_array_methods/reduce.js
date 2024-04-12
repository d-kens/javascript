/*  
    - reduce() reduce the elements of an array to a single value
*/


// calculate sum
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(total)

function sum(accumulator, element) {
    return accumulator += element;
}


// maximum value
const maximum = prices.reduce(getMaximum);
console.log(maximum);

const minimum = prices.reduce(getMinimum);
console.log(minimum);

function getMaximum(accumulator, element) {
    return Math.max(accumulator, element);
}


function getMinimum(accumulator, element) {
    return Math.min(accumulator, element);
}
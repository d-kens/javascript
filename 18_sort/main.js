/*
    - sort() method is used to elements of an array in place(sortinn is done directly on the original array without creating a separate copy).
    - It sorts elements as strings in lexicographic order not alphabetical.
    - Lexicographic: All characters (alphabets characters, numbers and symbols) are considered for sorting.
    - Lexicographic order
        -> In string: Compared character by chater from left to right
        -> In numerical terms: Numbers are treated as strings and compared based on their ASCII or Unicode values.

*/

let strings = ["wanjapi", "kulu", "mchicha", "luku", "monkei", "wepi", "pompei", "strfan"];
strings.sort();
console.log(strings);


let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b ) => b - a); // reverse order
console.log(numbers);


const people = [
    { name: "spongebob", age: 30, gpa: 3.0 },
    { name: "patrick", age: 37, gpa: 1.5 },
    { name: "squidward", age: 51, gpa: 2.5 },
    { name: "sandy", age: 27, gpa: 4.0 },
]

people.sort((a, b) => a.age - b.age); 
console.log(people);
people.sort((a, b) => b.age - a.age);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
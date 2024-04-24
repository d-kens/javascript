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
numbers.sort();
console.log(numbers);
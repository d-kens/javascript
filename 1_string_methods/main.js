/*
 * String Methods
 1. charAt(index)- Return a character at a specific index
 2. indexOf("character") - Return the index of the first occurence of a character
 3. length prperty - Returns the length of string
 4. trim() - Remove whitespace before and after a string
 5. toUpperCase() - Converts a string to uppercase
 6. toLowerCase() - Converts a string to lowercase
 7. startsWith() & endsWith() - Check if string starts and ends with a given character.
 8. includes() - Check if a string includes a given character or a sequence of .
 9. replaceAll() - Replace the specified character(s) with a given character(s).
 10. padStart() & padEnd() - Pad the start or end with a given character or set of characters to get a desired string length. 
    - Pass in the desired length and the character or string of charactersyou want to pad with

 11. split() - split a string into an array of substrings based on a given 
    - split(separator): separator is the pattern describing where each split should occur.
    - split(separator, limit): limit is a non negative integer specifying a limit on the number of substrings to be included in the array.
      If provided split the string at each occurence of the specified separator but stops when the limit entries have been placed in the array
*/

// charAt(index)
let school = "Strathmores University";
console.log(school.charAt(20));
console.log(school.charAt(2))

// indexOf("char")
console.log(school.indexOf('s'));
console.log(school.indexOf('S'));
console.log(school.indexOf('e'));
console.log(school.indexOf('y'))

// length property
console.log(school.length);


// trim()
school = "     Strathmore University    ";
console.log(school);
school = school.trim();
console.log(school);

// toUpperCase()
console.log(school.toUpperCase());

// toLowerCase()
console.log(school.toLowerCase());

// startsWith()
console.log(school.startsWith('U'));
console.log(school.startsWith('S'));

// endsWith()
console.log(school.endsWith('y'));
console.log(school.endsWith('W'));

// includes()
console.log(school.includes('ckens'));
console.log(school.includes('strath'));
console.log(school.includes('Strath'));

// replaceAll()
console.log(school.replaceAll('Strathmore', '5trathm0r3'));
console.log(school.replaceAll('e', '3'));

// padStart()
console.log(school.padStart(100, 'D'));
console.log(school.padStart(100, 'popo'));

// padEnd()
console.log(school.padEnd(100, 'c'));
console.log(school.padEnd(100, 'pipi'));

// split()
console.log(school.split()); // retun array with the calling string as a single element
console.log(school.split('')); // split the string at each individual character
console.log(school.split('', 5));



// // string slicing - creating a substring from a portion of another string

// // fullname = fullname.trim();
// // console.log(fullname);

// // let firstname = fullname.slice(0,7);
// // let middlename = fullname.slice(8, 15);
// // let lastname = fullname.slice(16);

// // console.log(firstname);
// // console.log(middlename);
// // console.log(lastname);

// // let firstChar = fullname.slice(0,1); 
// // let lastChar = fullname.slice(-1); 
// // let firstThreeChars = fullname.slice(0,3); // The first 3 characters
// // let lastThreeChars = fullname.slice(-3); // The last 3 characters


// // console.log(firstChar);
// // console.log(lastChar);
// // console.log(firstThreeChars);
// // console.log(lastThreeChars);

// // Combining string slicing with indexOf method to make it more dynamic
// // let fullName = "Onyango Dickens";

// // let firstName = fullName.slice(0, fullName.indexOf(" "));
// // let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // console.log(firstName)
// // console.log(lastName);

// const email = "omondikens1@gmail.com";
// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);
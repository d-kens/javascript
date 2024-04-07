let username = "Onyango";

// charAt() - Returns a character at a specific index.
console.log(username.charAt(0));
console.log(username.charAt(1));
console.log(username.charAt(7));

// indexOf() - Returns the index of the first occurence of a character
console.log(username.indexOf("o"));
console.log(username.indexOf("O"));
console.log(username.indexOf("n"));

// length property return the length of a string
console.log(username.length);

// trim() - remove whitespace before and after a string
let fullname = "   Onyango Dickens Omondi   ";
console.log(fullname)

console.log(fullname.trim())

// toUpperCase() - converts a string to uppercase
console.log(fullname.toLocaleUpperCase());

// to LowerCase() - converts a string to lowercase
console.log(fullname.toLowerCase());

// startsWith() & endsWith() - check if a string starts with or ends with a given charaacter
console.log(fullname.startsWith(" "));
console.log(fullname.startsWith("l"));

console.log(fullname.endsWith("o"));
console.log(fullname.endsWith(" "));

// includes() - check if a string includes a given character or a sequence of characters
console.log(fullname.includes("n"));
console.log(fullname.includes("ens"));


// replaceAll() - Replaces the specified characetr with a given character.
console.log(username.replaceAll("O", "1")); 
console.log(fullname.replaceAll("  ", "Omoke "))


// padStart() & padEnd() - Pad the start or end of a string with a give character to get a desired string length
console.log(fullname.padStart(36, "ty"));
console.log(fullname.padEnd(36, "hu"));
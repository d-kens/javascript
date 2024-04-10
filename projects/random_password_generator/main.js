// RANDOM PASSWORD GENERATOR
function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowerCaseCharacters = "abcdefghijklmnopuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPUVWXYZ";
    const numberCharacters = "123456789"
    const symbolCharacters = "!@#$%^&&*()"

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += includeLowerCase ? lowerCaseCharacters : "";
    allowedCharacters += includeUpperCase ? upperCaseCharacters : "";
    allowedCharacters += includeNumbers ? numberCharacters : "";
    allowedCharacters += includeSymbols ? symbolCharacters : "";

    if(passwordLength <= 0) {
        return `(password length must be atleast one)`;
    }

    if (allowedCharacters.length === 0) {
        return `(At least one set of character needs to be selected)`;
    }


    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }
    

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);



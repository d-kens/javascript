/*
 - Math.floor() generates a random floating point number between 0 (inclusive) and 1 (exclusive)
 - (maximumNumber - minimumNumber + 1) expression calcultaes the lenght of the range. (max - min) gives the length of the range and adding 1 ensures that max is inclusive.
 - Math.floor() rounds down the generated random floating point number to the nearest integer.
 - Finally we add min to the result to shift the random number to start from min instead of starting from zero.
*/


const  minimumNumber = 1;
const maximumNumber = 100;
const answer = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;


let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minimumNumber} - ${maximumNumber}`);
    guess - Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess < minimumNumber || guess > maximumNumber) {
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN")
        }
        else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN")
        } else {
          window.alert(`CORRECT! THe answer was ${answer}. It took you ${attempts} attempts`); 
          running = false 
        }
    }

}

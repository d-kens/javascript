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

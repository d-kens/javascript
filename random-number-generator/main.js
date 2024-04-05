const myButton = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 3;
const max = 20;
let randomNumber1, randomNumber2, randomNumber3;

myButton.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * (max - min)) + min;
    randomNumber2 = Math.floor(Math.random() *  (max - min)) + min;
    randomNumber3 = Math.floor(Math.random() *  (max - min)) + min;


    myLabel1.textContent = randomNumber1;
    myLabel2.textContent = randomNumber2;
    myLabel3.textContent = randomNumber3;
}
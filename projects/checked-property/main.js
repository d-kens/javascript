/*
    .checked = property that determines the checked state of an HTML checkbox or radio button.
*/

const subscribeCheckbox = document.getElementById("subcribeCheckbox");

const visaButton = document.getElementById("visaBtn");
const masterCardButton = document.getElementById("masterCardBtn");
const payPalButton = document.getElementById("payPalBtn");
const submitButton = document.getElementById("submitBtn");

const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

submitButton.onclick = function() {
    if(subscribeCheckbox.checked) {
        subscribeResult.textContent = `You are subscribed`;
    } else {
        subscribeResult.textContent = `You are NOT subscribed`;
    }

    if(visaButton.checked) {
        paymentResult.textContent = `You are paying with VISA`
    } else if(masterCardButton.checked) {
        paymentResult.textContent = `You are paying with MasterCard`
    } else if(payPalButton.checked) {
        paymentResult.textContent = `You are paying with PayPal`
    } else {
        paymentResult.textContent = `You must select a payment type`;
    }
}
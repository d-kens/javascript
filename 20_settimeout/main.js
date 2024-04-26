/*
    - setTimeout() is a function that allows you to schedule the execution of a function after an amount of time (milliseconds).
    - Times are approximate. Meaning the delay specified in miiliseconds is not guaranteed to be exact. The actual delay might vary depending
    on factors such the workload of JavaScript runtime environment.
        NB: JavaScript is Single Threaded. It only excutes one piece of code at a time. If the runtime is busy executing other task when the setTimout() function is called,
        it may delay the execution of the callback function untill it is available to process it.
    - Syntax: setTimeout(callback, delay).
    - clearTimeout(timeoutId) function can be used to cancel a timeout before it triggers. 
*/

function sayHello() {
    console.log('Hellow');
}

setTimeout(sayHello, 3000);

// with anonymous function
setTimeout(function() {
    console.log('Nadi')
}, 4000)


const timeoutId = setTimeout(() => console.log('Jo Thurwa'), 6000);
clearTimeout(timeoutId);



let timerId;

function startTimer() {
    timerId = setTimeout(() => window.alert("Hello"), 3000)
    console.log('started')
}

function clearTimer() {
    clearTimeout(timerId);
    console.log('clear')
}
// STOP WATCH
const display = document.getElementById("display");
let timer = null;  // holds reference to the timer interval
let startTime = 0; // holds timestamp when the stopwatch is started
let elapsedTime = 0; // holds total elapsed time since the stop wacth started
let isRunning = 0;  // track whether stop watch is running or not


function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}


function stop() {
    if(isRunning) {
        clearInterval(timer); // clear setInterval to stop updating display
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}



function reset() {
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00"
}

function update() { // called repeatedly by the interval set in start() method
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}





// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;


// function start() {
//     if(!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop() {
//     if(isRunning) {
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }

// function reset() {
//     clearTimeout(timer)
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;

//     display.textContent = "00:00:00:00"
// }



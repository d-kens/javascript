/*
 - callback hell: A situation in JS where callbacks are nested within other callbacks to the degree where the code is difficult to read.
 - An old pattern to handle asynchronous functions.
 - Use promises + async await to avaoid call back hell
*/

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 1000);
}


function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 2000);
}


function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}


function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 4000);
}

// nesting of callbacks
task1(() => {
    task2(()=> {
        task3(() => {
            task4(() => console.log("All tasks complete"));
        })
    })
})
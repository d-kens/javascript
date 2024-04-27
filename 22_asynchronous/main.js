/*
 - Synchronous code executes line by line consecutively in a sequential manner.
 - Asynchronous code allows multiple operations to be performed concurrently without blocking the main execution thread.
 - Async operations include I/O operations, network requests, fetching data, or any task that could take an indeterminate amount of time.
 - Asynchronous code is typically handled with callbacks, promises, or async/await syntax.
*/

/*
    Handling async code using callbacks
     - function1 is asynchronous.
     - function2 is synchronous.
     - We use a callback to ensure tasks 2 to 5 execute after task one is complete.
*/

function function1(callback) {
    setTimeout(() => {console.log("Task 1"); callback()}, 3000);
}

function function2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
    console.log("Task 5");
}

function1(function2);

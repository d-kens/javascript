/*
 - Synchronous code executes line by line consecutively in a sequential manner.
 - Asynchronous code allows multiple operations to be performed concurrently without blocking the main execution thread.
 - Asynchronous code is typically handled with callbacks, promises, or async/await syntax.
 - Asynchronous operations are operations that take an indeterminate amount of time to complete. Examples are
    1. I/O operations
    2. Network requests
    3. Fetching data from a server


  Explanantions
   - Asyc code doesn't block the main excution thread. They are exexcuted asynchronously, allowing the program to
   continue with other tasks while waiting for the asynchrous operation operation to complete.
   - They don't halt the excution of other tasks.
   - This means that if there are tasks that need to be performed after and async operation completes, we can't rely on sequential execution.
   - Callback (and Promises and Async/Await) are a way to handle async operations by providing a mechanism for executing code after an asyc operation completes.
*/

// callback passed as arguement to asyn functions
// callback serve as a way of specifying what should happen once the asyn task completes
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

/*
    - callback function: a function passed as an arguement to another function. 
    - It is used to handle asynchronous operations (operations that take a variable amount of time): Reading a file, Netwok requests, intercating with a database.
    - We are not exactly sure when these processes are going to complete. By using a callback, we ensure a function excutes after these processes are complete.
*/

function sum(callback, ...values) {
    let result = 0;
    for(let i = 0; i < values.length; i++) {
        result += values[i];
    }

    callback(result);
}


function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

function displayConsole(result) {
    console.log(result)
}

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum(displayPage, ...values);
sum(displayConsole, ...values);
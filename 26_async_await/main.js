/* 
 Async/Await
- Simplifies asynchronous code by allowing it to be written in a more synchronous style, making it easier to read and maintain.
- Particularly useful when we have many asynchronous tasks that need to be executed sequentially, where each taks depends on the result of the previous task.

- The keyword async before a function makes the function return a promise implictly and enable the use of the awit keyword within its body.
- The await keyword is used within the async function to pause the execution of the function untill a Promise is settled (either rejected or resolved). It allows 
asynchronous code to be written in a more synchronous style, making it easier to read and understand.
- Everything after Await is places in the event queue.
*/


// The async before a function makes the funtion return a promise
async function myFunction() {
    // return "Hello"; // return Promise.resolve("Hello");
    return Promise.reject("Errrrrrrrror");
}

myFunction().then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log(error);
    }
);


// Await sysntax
// Can only be used inside async function
// Await keyword makes the function pause the execution and wait for a resolved promise before it continues
async function displayValue() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I Love You !!")
        }, 3000)
    })

    const result =  await myPromise
    console.log(result);
}

displayValue();




// Using async/await to perform several async functions one at a time
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You didn't walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned= false;

            if(kitchenCleaned) {
                resolve('You clean the kitchen');
            } else {
                reject("You didn't clean the kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut) {
                resolve('You take out trash')
            } else {
                reject("You didn't take the trash out")
            }
        }, 500)
    })
}


async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");

    }  catch(error) {
        console.error(error)
    }   
}


doChores();

/*
 - A promise is an object representing the eventual completion or failure of an async operation.
 - It is a placeholder for a value that may not be available yet but will soon be resolved in the future.
 - A promise can have three states:
    1. pending - initial state, nither fulfilled nor rejected.
    2. fulfilled - the operation completed sucessfully and the promise has resolved to a value.
    3. rejected - the operation failed and the promise has a reason for thr failure.

*/

// DO THESE CHORES IN ORDER

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500)
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500)
// }

// function takeOutTransh(callback) {
//     setTimeout(() => {
//         console.log("You take out trash");
//         callback();
//     }, 500)
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTransh(() => console.log('You finished all the chores'))
//     })
// })

// NB: If we have a lot of callbacks to work with. We will end up in a callback hell


// Using Promises
// Modify the functions to use promises


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
            const kitchenCleaned= true;

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


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log('You finished all the chores')})
         .catch(error => console.error(error));
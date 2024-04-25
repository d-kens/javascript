/*
 - Closure is a function defined inside of another function.
 - The inner function has access and scope of the outer function.
 - Closures allow for private variable  and state maintanance.
 - They are used frequently in JS framewiorks: React, Vue, Angular.
*/

function outer() {
    let message = "hello"

    function inner() {
        console.log(message) 
    }

    inner()
}

outer()

/*
    A closure Maintaining the State (remember previous state/value of a variable) of a variable and make it private
*/

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount() {
        return count;
    }

    return { increment, getCount}
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)

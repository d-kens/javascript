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
    - A closure can maintain the state of a variable (remember the previous state/value of a variable)
    - It make the variable private
*/

function increment() {
    let count = 0
    count++;
    console.log(`Count increased to ${count}`);
}
// Notice that everytime we call the increment function the count variable will always be reset (Its previous state can't be recalled)
// The issue can be solved by declaring the count variable outside the function but it is not private anybody and anything can access and change it
increment() // counter increased to 1
increment() // counter increased to 1
increment() // counter increased to one

console.log('Using closures')
// A closure solves this since it can maintain the state of variable and make private
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount() {
        return count;
    }

    return { increment, getCount }
}


const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count); // undefined since the count variable is private

console.log(counter.getCount());




function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore }
}

const game = createGame();
game.increaseScore(100);
game.decreaseScore(6);
game.increaseScore(1);
console.log(game.getScore())




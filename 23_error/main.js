/*
- A error is an object that is created to represent a problem that occurs. 
- Uncaught errors interrupt the normal flow of the program.
- Errors can be generated for all sorts of issues such as: 
    1. Network Issues
    2. Promise Rejection
    3. Security issues
- The solution is to handle these errors when they occur. This can be done by using tty-catch-finally block
    try {}  - enclose code that might potentially cause an error
    catch {} - catch and handle any thrown errors from try {}
    finally {} - (optinal) Always executes. Used mostly for clean up e.g close files, close connections, release resources
*/

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by zero!");
    }

    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor
    console.log(result)
} catch(error) {
    console.error(error);
}
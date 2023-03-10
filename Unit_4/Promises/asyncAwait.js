/* //! Async / Await
        - 2017 ES8
        - Can make any function async simply by denoting it as such

    Keywords:
    - async: denotes a function to be asnc
    - await: calls a process to wait for our results

    - Can help us reduce the need for callback functions
    - CANNOT be used in loops
    - ALWAYS returns a promise
*/

//* Example
// Async Function Declaration (declarative style)
async function asyncFuncName() {
    // ... code to run
}

// Async Function Expression
let ExpressionName = async function () {
    // ... code to run
}

// Async arrow function
let arrowFunctionName = async () => {
    // ... code to run
}

//---------------------------------------------------------------------------------------

//* Because async functions ALWAYS return a promise, we can use promise resolvers (.then, .catch, etc)

async function getName() {
    return "Frodo";
}
console.log(getName()); //Promise { 'Frodo' }
// .then(): a method that attaches a callback function for the resolution of the promise
getName().then((data) => console.log(data));

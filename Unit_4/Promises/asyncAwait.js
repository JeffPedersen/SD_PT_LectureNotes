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

/* //! Await
        - Tells JS that a promise is being returned and to wait on that result
*/

async function extraData() {
    // returnData() is in our promises.js
    //let info = returnData(); //? Ran so quickly it printed [object Promise] 

    // Include await so we "wait" for the response, so we dont get undefined data as above 
    let info = await returnData();

    return `${info} stored in some cloud... or API...`
}

extraData().then((data) => console.log("line 51 return of asyncAwait.js", data));
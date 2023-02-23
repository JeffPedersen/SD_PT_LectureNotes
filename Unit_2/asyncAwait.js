/* 
! Async / await   
    Introduced in 2017
    Makes any function an asnyc by denoting
    Keywords
        Async  
            -denotes an async function
        Await  
            -calls a process to "wait" for results/Input

    Can help reduce the need for callback functions
    CANNOT be used in loops
    Always returns a promise 
*/

//! Async function declaration
async function asyncFunctionName() {
  // code to run
}

//! Asnyc function expression
let funcExpressionName = async function () {
  // code to run
};

//! Asnyc arrow function
let arrowFuncName = async () => {
  // code to execute
};

async function getName() {
  return "You're a lizard, Harry";
}
console.log(getName);  //[AsyncFunction: getName]
getName().then((name) => console.log(name)); //You're a lizard, Harry

//! Await
//  Tells JS that a promise is being returned and to wait the result



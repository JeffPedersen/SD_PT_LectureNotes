/* 
    ? Functions
        - block of code that performs a particular task.
        - simplified programs that run a task when invoked.
        Two Main Types:
            - Declaration
            - Expression

        Functions must be called/invoked to run!
*/

//* Function Declaration
/* 
    Structure:
       1      2
    function hi() {
        ... code block (block of logic)
    }

    1. Keyword (function)
    2. Name of the function and parenthesis for the parameter
    ! Gets hoisted
*/

function hi() {
    console.log("Hi there!");
}

hi();

//* Function Expression
/* 
    Structure:
       1
    let hey = function hi() { 
        code block...
    }

    1. The variable "hey" is now representative of the function hi()
    ! Does NOT get hoisted
*/

let SpicyFunction = function hey() {
    //console.log("Hey!");
    return "Hey!";
}
SpicyFunction(); // Expression variable name is required to run function
// hey(); // Will not run

console.log(SpicyFunction()); // runs function and prints returned value to console
console.log(SpicyFunction); // Wil;l return that SpicyFunction is a function

// Create a function that, when invoked, lists out the numbers 1-10

function counting() {
    for (a = 1 ; a <= 10 ; a++) { //uses loop format ( x ; x ; x )
        console.log(a);
    } 
}
counting();

// Create an array and function to list out array values
let words = ["This", "can", "be", "really", "cool"];
function printArray() {
    // for(i = 0; i < words.length; i++) { // indexes the items inside "words" and assigns then each a number 1-5 and moves onto the next one
    //     console.log(words[i]);  // lists first item in "words" then goes onto the next one
   //  }
    console.log("Testing join method: ", words.join(" ")); // takes each item and lists them, takes whatever you put next to join in () and separates them by that
}

printArray();

//! Parameters
/* 
    Structure:
                        1
    function fncName(parameter) {
                            2
        console.log(`Hi, ${parameter}`);
    }
                3
    fncName("Ben");
    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter given to the function.
    3. This is where we define what the parameter's value will be. The argument 
*/

function greet(title) { // title is parameter name
    console.log(`Hey there, ${title}`);
}
// console.log(title); // Results in not found error, title only used in function code block
// greet(); if we run this we get undefined
greet("Jeff"); // you can add more below
greet("Viviana"); 

// Two parameter function
let totalSpent = 0;
function order(foodItem, total) {
    console.log(`I paid ${total} dollars for a ${foodItem}`); // backticks for string interpolated values
    totalSpent += total;       // reassign is +=
    console.log(totalSpent) // keeps a running tab of total
    return totalSpent;
}
// invoking - arguments
//    order(argument, argument);
order("Whiskey", 10);
order("Wine", 10);
order("Sake", 5);
order("Beer", 5);
console.log("My total was $" + totalSpent);

//! Return
/* 
    Structure:
    let hi = function() {
           1
        return "hi";
    };
            2        3
    let greeting = hi();
    console.log(greeting);

    1. keyword: return - brings our data out of our function.
    2. New variable to hold the returned value.
    3. When called, the function becomes the value of the return.
*/

function fName() {
    return "Jeff";
}
let myName = fName();
console.log(myName);

let volume = function (l, w, h) { // functions do not always need names
    let total = l * w * h;
    return total;
} 
let exOne = volume(3, 5, 2); 
let exTwo = volume(7, 3, 5);
let exThree = volume(6, 6, 6);
console.log(`Ex One: ${exOne} \nEx Two: ${exTwo} \nEx Three: ${exThree}`); // "\n" calls on new line

function coffeeMaker(filter) {
    return `A full pot of ${filter}`
}
let mon = coffeeMaker("coffee");
let wed = coffeeMaker("tea");
let sun = coffeeMaker("espresso");
console.log(mon, "\n" + wed, "\n" + sun); // new line super helpful \n

//! Arrow Functions
/* 
    Structure:
        1        2
    let hi = () => {
        console.log('hi');
    }

    1. We need to set the arrow function to a variable
    2. We use the "fat arrow" to signify it's a function.

    - Introduced in ES6. They are basically just a more concise way to write functional expressions - NOT declarations.
    ! Do NOT get hoisted!
    
    Two different styles:
        - Concise Body
        - Block Body
*/

// Concise Body
let goodbye = () => console.log("goodbye friend");
goodbye();

let total = () => 2 + 5;
console.log(total());

// Block Body
let puppies = (qty) => {
    return `There are ${qty} puppy(s).`
};
let puppyCount = puppies(4);
console.log(puppyCount);
console.log(puppies(7));

// Same as above with concise body
let puppies2 = (qty) => `There are ${qty} puppy(s).`
console.log(puppies2(9));

// Mutiple params(parameters)
let calc = (x, y) => x+y;
console.log(calc(3, 15));

let calc2 = (x, y) => {
    return x+y;
}
console.log(calc2(5, 5));

//* IIFE
/* 
    - Immediately Invoked Function Expression
    - Helps allocating space in memory for anonymous functions
    - fires our function as soon as it is read.
*/

(function () {
    console.log("IIFE fired");
  })();
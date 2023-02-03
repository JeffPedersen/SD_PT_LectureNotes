/* 
A comment block ins JS:
Windows: alt + shift + a
Mac: option + shift + a
You can do this prior or highlight your text and hit your hotkey
*/

/* 
    Variable:
    - Hot we give program/computer/app data (a thing we want the computer to know)
    - A declaration that stores data/data values

    Variables are declared with JS keywords
    - var , old and not often used (prone to mistake)
    - let , can reassign the variables value 
    - const, cannot reassign a value to  const declared variable
*/

let a = 100;
let streetAddress = "123 Sesame Street"
// if you want to declare a variable that is more than one letter or number use quotes

// 1    2      3    4
let     V      =    1;

/* 
    1. Javascript Keyword to denote the creation of a variable
    2. Name of the variable
        - Developers refer to and use the variable name to grab data stored.
        - Try to keep variable names pertaining to the data (if you can)
    3. Assignment operator (fancy tech/math for equal sign.)
    4. The initia value/data value
*/

//  Variable Declaration 
let x;
let y;

// Variable Initialization
let z = 10; // Anything on the right side of the = (been given a value)

// Assigning to Other Variables

let first = "Jeffery"
let last = "Pedersen"

let fullName = first + " " + last;

// console.log is a METHOD and all METHODS require ()
console.log(fullName);

console.log('declaration: ', x ) // Declaration: undefined 

x = 13; // assigned our variable x for the first time
console.log('Initialization 1: ', x);

x = 42; // Reassign the value of x
console.log('Initialization 2: ', x);

let hi = "hello";
console.log("Both variables: ", x, hi)

// Let vs Const in action
// Const is "new" is ES6: declare variables mean to remain unchanged 

let today = "Great";
const Javascript = "Awesome!"
console.log(today, Javascript)

today = "lovley"
// Javascript = "super!"; // When we try to reassign a const variable = TypeError
console.log(today,Javascript)

console.warn("This is your first warning!");

let warning = "Uh Oh, we've been warned...";
console.warn("Warning: ", warning);

let err = "This looks real bad and scary...";
console.error("Error: ", err)
let error = "ope"
console.log(error)

// This of an error less as something scary more of "javascript is embarrassed and doesn't know what to do"
//? ArrayDestructuring 
/*
-Allows us to unpack values from arrays into distinct variables. 
-Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator(=)
-Great way to pull info from the array and assign to it's own variable
-
*/

// Without destructuring
const fullName = ["John", "Doe"];
const firstName = fullName[0]; //first item of "fullName"
const lastName = fullName[1]; //second item of "fullName"
console.log(firstName, lastName);

// With destructuring
const fullName2 = ["John", "Doe"];
let [firstName2, lastName2] = fullName2 
console.log(firstName2); //John
console.log(lastName2); //Doe

//? Spread Operator ---------------------------------------------------------------------------------------------
/*
-The spread operator basically pulls out the elements of an array as a standalone list of elements
-Denotes by three consecutive periods: ...Array
*/

const myName = ["Jane", "Doe"];
const copiedName = [...myName]; // The spread operator inserts the elements from myName
console.log("Copied with spread operator: ", copiedName); //Copied with spread operator:  [ 'Jane', 'Doe' ]

const anotherCopy = [myName]; //gives us a nested array which looks gross 
console.log("copied w.o spread operator:", anotherCopy) //copied w.o spread operator: [ [ 'Jane', 'Doe' ] ]
console.log(anotherCopy[0][0]);

//An example with numbers:
// let numberArray = [];
// for(i=0; i<=20 ; i++) {
//     numberArray.push(i);
// }
// console.log(numberArray);

// const newNumberArray = [...numberArray];
// console.log("NewNumberArray is: ", newNumberArray);

myName.unshift("Dr."); // The spread operator "copied" the first state of myName, the copy did not update but the original can
console.log("My name is: ", myName); // My name is:  [ 'Dr.', 'Jane', 'Doe' ]
console.log("Copied Name: ", copiedName); //Copied Name:  [ 'Jane', 'Doe' ]

//? math.min --------------------------------------------------------------
console.log(Math.min(1, 5, 13, -5)); //returns smallest value // -5

const prices = [1.99, 9.99, 11.99, 19.99]; //! CANNOT USE MATH ON AN ARRAY
console.log(Math.min(prices)); //we get NaN // like trying to play with the box and not the legos inside the box
console.log(Math.min(...prices)); //we bypass by using spread operator to unpack the numerical values (...array) 

//* Ex changing the original and copied array
const persons = [
    {
    name: "Jane",
    age: 28,
    },
    {
    name: "John",
    age: 35,
    },
];
// Old way of copying persons:
// const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age
// }));

//* Using spread operator
const copiedPersons = [...persons];
//test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});
console.log("Persons array: ", persons); //includes anna object in array
console.log("Copied persons array: ", copiedPersons); //copy does not include anna, created before anna was added

//* Variables within memory
// first assignment / original assignment
let x = 10;
let y = "abc";
let z = null;
// reassign to another variable
let a = x;
console.log(a); //10
let b = y;
console.log(b); // abc

// reassign a and b
a = 5;
b = "def";
console.log(x, y, a, b); // 10 abc 5 def

//? ------------------------------------------------------------------------------------

let arr = [];
arr.push(1);
console.log(`arr: ${arr}`); // 1

let reference = [1];
let refCopy = reference;
console.log(`refCopy = ${refCopy}`); // 1

reference.push(2); // push adds 2 to the end of the array
console.log(reference, refCopy); 

refCopy.push(3); // push adds 3 to the end of the array, 
console.log(reference, refCopy); 

//? ------------------------------------------------------------------------------------

//? Ref syntax
/* 
-We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.
- LEFT SIDE

- This looks exactly like the spread syntax: ...
- Spread syntax -> expands an array 
- Rest -> condenses an array
*/

const fullNameAgain = [
    "Hakuho",
    "Sho",
    "Dr.",
    {
      month: 03,
      date: 22,
      year: 1973,
    },
    2,
    "test",
    "4",
    true,
    false,
];
console.log(fullNameAgain[0]); // [0] grabs first item
let enhoName = fullNameAgain[0];

// using both array destructuring and rest:
let [ringName, realName, , , , ...otherInfo] = fullNameAgain // commas SKIP an item
// let [ringName, realName, ...otherInfo] = fullNameAgain // Notice the comma, if its not there it'll include DR
console.log(`new ringName: ${ringName}`); // hakuho
console.log(`new realName:  ${realName}`); // sho
console.log(`otherInfo:  ${otherInfo}`); // otherInfo:  test,4,true,false

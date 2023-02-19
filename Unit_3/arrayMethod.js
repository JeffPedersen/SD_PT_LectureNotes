//? Array Methods, awesome ways to do things with or to arrays

let color = ["white", "pink", "blue", "green"];
for (item of color){
    console.log(item); // console.log each item in our array
}
// * .push() adds item(s) to end of array
color.push("purple", "gold"); // added purple
console.log("Push method: ", color); 
console.log(color[5]) // logs gold 
// * .splice(), splice(indices of where to remove , how many to remove , (optional) what to replace with/add )
color.splice(0, 1, "black"); // targets first item 1 to remove, and "to add new"
console.log("splice method: ", color);
color.splice(1, 0, "silver"); // 2nd in line, removes nothing, and adds "silver"
console.log("second splice method: ", color);
// console width is generally 80 char

// * .pop(), removed value from end of array
color.pop(); // removes last item (gold)
console.log("pop method: ", color);

// * .shift(), removes the value in the first position aka the start
color.shift(); // removed black
console.log("shift method: ", color);

// * .unshift(), adds to the front of an array, can include multiple items
color.unshift("red", "rust");
console.log("unshift method: ", color);

// .length, property not method
console.log(color.length);

// * .toString(), returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("toString method: ", rgb.toString());

//! Iteration Methods
/* 
    ? .filter() & .include()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false
        -  A callback function is another function that we invoke within our main function
    - loops thru array
    - MUST have a return
*/

let fruits4 = ["blackberry", "kiwi", "banana", "papaya", "mango"]
// use filter to remove papaya
let filteredFruit = fruits4.filter(fruit => { // item "fruit" can be anything btw
    let remainingFruit = fruit !== "papaya"; // checks each item, if not papaya returns to remainingFruit 
    console.log(`Remaining fruit: ${remainingFruit}`); // logs what remainingFruit
    return remainingFruit;
})
console.log(filteredFruit);

// .includes(), remove any fruit that starts with "b"
let fruits = ["blackberry", "kiwi", "banana", "papaya", "mango"]
console.log("Includes method: ", fruits.includes("b")) // false, tried to look at this as a whole
let otherFruit = "Pineapple";
console.log("Includes method: ", otherFruit.includes("p")) // true, Pineapple has "P"
console.log("Includes method: ", otherFruit.includes("apple")) // true, Pineapple has "apple"

// .filter with .includes, remove any fruit with "p"
let fruits2 = ["blackberry", "kiwi", "banana", "papaya", "mango", "peach"]
const filterFruit2 = fruits2.filter(item => !item.includes("p")); // Case sensitive BTW
console.log(filterFruit2);

let fruits3 = ["blackberry", "kiwi", "banana", "papaya", "mango"]
const filteredFruitFunction = fruits3.filter(eatMango); // set the filtered array to variable, filter will run eatMango function per item in array 
function eatMango(item) { // returns true if not mango, false if mango
    return item !== "mango";
}
console.log("filter with function: ", filteredFruitFunction); // printing to see final filtered array

//? forEach()
/*
    Runs 3 arguments:
        - The value
        - The index
        - The array object itself
    - forEach() helps us iterate over an array performing a function once per element in the array via a callback function.
    - Is not executed for empty elements 
    - Does not change original array
*/
//------------------------------------------------------------------------------------------------------------------------------
let newFoodList = ["chocolate", "strawberry", "pizza", "beer"];
for (let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);
}
newFoodList.forEach((item) => console.log("For each method: ", item)); //forEach item it ran a console log on each item in the array
newFoodList.forEach((item, i) => { 
    console.log("forEach with Index: ", item, i); //forEach item runs a console.log and assigns each item a number
})
newFoodList.forEach(function (item) { //declarative function / same as line 91
    console.log("Declaration sample: ", item);
})


let newFoodList2 = ["chocolate", "strawberry", "pizza", "beer"];
// Build a function to console.log item
// Separating function from forEach, works 
function displayFoodItem(foodThing) {
    console.log(`function outside of forEach: ${foodThing}`);
}
// Pass the forEach method the function
newFoodList2.forEach(displayFoodItem);
//------------------------------------------------------------------------------------------------------------------------------
//? .map()
/* 
    -Like a copy method
    -Creates a new array from calling a function for every array element
    -Calls the function once per element in an array
    -Does not execute the function for empty elements 
    -Does not change the original array
*/

//Populated by for loop
let numArray = [];
//Populated by using.map on numArray
let fizzBuzzArray = [];
for (let x = 0; x <= 99; x++) {  //basic loop of for (x; x; x)
    numArray.push(x) //take numArray and push our variable x
}
//console.log("numArray: ", numArray); //Confirmation that it pushed

//Simple example first
//numArray.map((x) => fizzBuzzArray.push(x + 5))  // We want to take mapArrays data and map it over to fizzbuzz. +5 to check that fizzBuzz is different
//console.log("fizzBuzzArray: ", fizzBuzzArray); //Just checking if it map'd correctly


// if % by 3 print fizz, if % by 5 print buzz, if % by 3&5 print #(push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division
    if (x % 15 === 0) {
        fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
});
//Check if fizzBuzzArray populated
console.log("fizzBuzzArray: ", fizzBuzzArray);

//? map vs forEach example -----------------------------------------
let mainArr = [1, 2, 3, 4];

// .forEach returns undefined. performs an action on each item and does NOT return a value
let forEachEx = mainArr.forEach((z) => z); //forEach does not VVV
console.log("forEachEX: ",forEachEx);
// .map returns a new array. performs an action and creates/returns a new value
//let mapEX = mainArr.map((z) => z + 3); //map gives us a new array by default
let mapEX = mainArr.map((z) => z + 3);
console.log("mapEX: ", mapEX);

let secondMap = mapEX.map((z) => z + 5);
console.log("secondMap: ", secondMap);

//? .find() -------------------------------------------------------
let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"]; 
let character = "Leo";
console.log(
    "Find example 1: ",
    tmnt.find((c) => c === character) //finds strickly equal to "character"
);

character = "April";
console.log(
    "find Ex 2: ",
    tmnt.find((c) => c === character)
);

character = "Splinter"; //find will return true for splinter vs the value for splinter because we check all items via including the index
console.log(
    "find Ex 2: ",
    tmnt.find((c, i) => console.log(
        "character: ", 
        c === character,
        "Index: ",
        i
    ))
);
















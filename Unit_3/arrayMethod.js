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

let fruits = ["blackberry", "kiwi", "banana", "papaya", "mango"]
// use filter to remove papaya
let filteredFruit = fruits.filter(fruit => { // item "fruit" can be anything btw
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
let fruits = ["blackberry", "kiwi", "banana", "papaya", "mango", "peach"]
const filterFruit2 = fruits.filter(item => !item.includes("p")); // Case sensitive BTW
console.log(filterFruit2);

const filteredFruitFunction = fruits.filter(eatMango); // references fruits and passes it eatMango function 
function eatMango(fruit) {
    return fruit !== "mango";
}
console.log("filter with function: ", filteredFruitFunction);

//console.log(eatMango("mango")) // true, only returns if what we input is NOT mango
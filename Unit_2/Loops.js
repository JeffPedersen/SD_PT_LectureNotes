// ? Loops

/* 
    Loops thru a block of code a number of times
    If stuck in an accidental infinitely running loop:
        ctrl+c, ctrl+z, red stop button from "code runner"

    ? For Loop:
        Takes in 3 parameters (the things within smooth bracers () )
            - Initial expression
            - Condition
            - Increment expression ( expression that changes the value)
        
    Structure: Format is ( x ; x ; x)
    for (initial expression first ; condition ; increment expression) {
        ... code block of logic
    }
*/

for (i = 0; i <= 10; i ++) {  // counts up to 10 in increment of 1
    console.log(i)
}
console.log("Finished with the loop");

for (i = 0; i <= 20; i +=2) { // counts up from 0 to 20 in increments of 2
    console.log(i);
}

for (i = 10; i >=0; i --) { // counts down from 10 to 0 in increments of 1
    console.log(i);
}

for (i = 10; i > 0; i--) console.log(i); // if using a straight return, you dont have to use curly brackets

let firstName = "Jeff";
for (let i = 0; i < firstName.length; i ++) { // looks at each letter of "firstName", counts and assigns it a number
    console.log(i, firstName[i]);
}

let sum = 0;
for (let i = 1; i <= 3; i++) { // i <= 3; is the number of loops it runs
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}
//console.log(sum);

// ? For In Loops: loops thru the properties of an object 
/* 
    Structure
    for (key in object) {
        ... code to run
    }

    key is a random variable name of our choice, object is the name of the object we are targeting 
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
};

// object is student / property we choose is name
console.log(student["name"]); // pulls out the value of the "name" from the object, "name" is the key

for (item in student) { // item is arbitrary variable name to represent our object we want to do something with
    console.log(item)
    console.log(student[item])
}

// variable name ofr key can be whatever we want, still runs
// for (pizza in student) {
// console.log(pizza);
// console.log(student[pizza]);
//}

let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
];

/* 
    ! For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/ 

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

// ? For of Loops:
/* 
    iterate - an object that has iterable properties (countable properties we can do stuff with)

    Structure:
    for (variable of iterable) {
        ... code to run
    }

    ^variable is any word we choose to use, iterable is the name of any iterable "thing"

    Can loop over Arrays, String, etc
*/

/*  
for (item of student) { // For of doesn't play well with object
    console.log(item);
}
*/

for (cat of catArray) {
    console.log("FOR OF LOOP: ", cat)
}

for (bubbles of catArray) { // finds the variable that we want and says "my favorite cat is the"
    if (bubbles === "maine coon") {
        console.log(`My favorite cat is the ${bubbles}!!!`)
    } else {
        console.log ("Not a maine coon... :( ");
    }     
}

console.log(`The value of two plus two is ${2 + 2}`)
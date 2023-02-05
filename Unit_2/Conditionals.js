/* 
    Some fun fact vocab & good to know of things:
        - JS Statement: 
            - any block of code that is performing an action, i.e. the code directions we give the program, let x = 15;
            - JS programs are all just a bunch of statements.
        - JS Expressions: 
            - a block of code that evaluates to a value, i.e. performs some sort of action that *produces a value*
            - Expressions are statements, but statements are not all expressions
    
        To ask JS to perform logic (like conditionals, functions, etc.) we will commonly use this format:
            keyword name (expression) {
                ... code block of logic
            }
*/

/* 
    ? Conditionals 
    - Our way to ask JS a question and get an answer value as a response
    - Evaluates an expression and response if it is true 
    - Falsy
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

/* 
    If Statements: gives a yes/true response if the expression is true/valid

    Structure: 
    if(expression evaluated) {
        ... code that runs only if expression is true
    }
*/

let isOn = true;

if (isOn == true) {

    console.log("The light is on!");
}

if (isOn) {
    console.log("The light is still on...");
}
isOn = false;
if (isOn == false) {
    console.log("The light is off");
}

//  If Else Statement: gives us a no(false) response if the expression isn't true or valid. A true code block and a false code block.

let weather = 65; //change from 65 to 75 to see different output
if (weather < 70) {
    console.log("Wear a jacket, its chilly"); 
} else {
    console.log("No jacket needed, its nice out!");
}

let loggedInUser = true; //change from true to false to see different output
if (loggedInUser == true) {
    console.log("Welcome Back, here is your profile")
} else {
    console.log("Please log in or sign up")
}

//  And &&, or ||, Not !=: evaluate an expression that is holding multiple checks

let rain = true;
let temp = 68;
if (temp < 70 && rain) {
    console.log("Put on a jacket")
} else {
    console.log("No jacket needed")
}

let rain = true; //change from true to valse to see changing outputs
console.log(rain);
console.log(!rain);

if (!rain) {
    console.log("Looks like a beautiful day")
} else {
    console.log("Get ur jacket!")
}





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

// ? Switch Statements
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of our code block
        - default
            - run if no cases match
    Structure:
    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Michael";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour.");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim":
    console.log("Bears. Beets. Battlestar Galactica");
    break;
  case "Pam":
    console.log("Yup");
    break;
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

// String interpolation: using a variable in a string with backticks, dollar sign, and {}
let myName = "Kate";
let bff = "Ben";
console.log(`My name is ${myName} and my best friendo is ${bff}!`); // YOU HAVE TO RUN SINGLE QUOTES OR ELSE IT WONT WORK!!!!
console.log("My name is ${myName} and my best friendo is ${bff}!"); // THIS ONE WONT WORK "" INDICATES A NORMIE STRING

let num = -7;

switch (true) {
    case num < 0 && num > -10: // colon indicates what belongs to case
        console.log("Case 1 ran.");
        break;
    case num > 0: // colon indicates what belongs to case
        console.log("Case 2 ran.");
        break;
    default:
        console.log("Default ran, no case worked");
        break;
}

let grade = "B";
switch (true) {
    case grade == "A":
    case grade == "B":
        console.log("Great job.")
        break;
    case grade == "C":
        console.log("Doing well, but maybe study a bit more.")
        break;
    case grade == "D": 
    case grade == "F": 
        console.log("Uh, I would really start studying...")
        break;
    default:
        console.log("That's not a grade value...")
}

// ? Ternary
/* 
    Always a If/Else style conditional at minimum
    Structure:
    ! "expression ? true : false"
    ;
*/

let expression = true;

expression ? console.log ("Runs true") : console.log ("Runs false");

let newNum = 6; // Modify number to see a change in output
newNum > 0 ? console.log("yes, greater than zero") : console.log("No, less than zero");

// as an if/else
if (newNum > 0) {
    console.log("yes");
} else {
    console.log("no");
}

// ? Else/If
let anotherNum = 0; // Modify number to change output
if (anotherNum == 0) {
    console.log("Hello");
} else if (anotherNum > 0) {
    console.log("Hey there");
} else {
    console.log("Goodbye");
}

anotherNum == 0
  ? console.log("Hello")
  : anotherNum > 0
  ? console.log("hi")
  : console.log("goodbye again");

let NumOne = 5;
let NumTwo = 2;
let value = NumOne + NumTwo > 1 ? NumOne + NumTwo : 0;
console.log(value)
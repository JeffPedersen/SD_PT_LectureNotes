/* //! Lookup Tables & State Machines

 * Lookup Table:
    - Objects that help us reference other values, great when working with collections of data
    - Often called dictionaries, objects work like dictionaries in JS, holding key value pairs to store collections of data.

    * Lookup Table == Object/Dictionary

    These can help with/Why:
    - Make the code cleaner and easier to read
    - Eliminated branching of conditionals by creating a simpler lookup
    - Default evaluation does not need to wait for all conditions to get processed. If a key does not exist in the lookup table, it returns the default condition straightaway.
    - Good for evaluating multiple rules/two or more conditions
*/

// Create an arrow function names listGames with a parameter of system
const listGames = (system) => {
    // build a collection object (fancy word for object)
    let collection = {
        Fps: ["Quake", "Doom", "Unreal Tournament"],
        Mmo: ["Wow", "Wow:classic", "Nostalrius"],
        Rpg: ["Fire Emblem", "Jprg", "whatever"],
    }
    console.log("Inside Function: ", collection[`Fps`]);
    return collection[system]; // return is bff, give us access to this shit outside of const listGames
}
//listGames("Mmo")); // this one gets the data back but does not show us
console.log(listGames("Mmo")); // we put Mmo in quotes so it looks for a "key"
console.log(listGames("Rpg")); // without quotes we look for variable
console.log(listGames("nope")); // undefined because no match

// Another example: 
const stateAbbreviation = {
    alaska: "ak",
    delaware: "de",
    hawaii: "hi",
    indiana: "in",
    vermont: "vt",
  };
  
  const acronym = {
    asap: "as soon as possible",
    fomo: "fear of missing out",
    gif: "graphics interchange format",
    lol: "laugh out loud",
  };

// console.log(stateAbbreviation["hawaii"]);
// Create a findIT function that will use whatever object(dict) and key term(search) give and return the value if found

function findIt(dict, search) { // search can change
    return dict[search]; // search can change
}

let stateInUs = findIt(stateAbbreviation, "vermont"); // finds vermont and returns what is next to it
console.log(stateInUs.toUpperCase()); // gives us vt and capitalizes it

let acro = findIt(acronym, "gif");
console.log(acro);

// An example with else ifs (conditionals) versus table lookup:
// We have to take of a kiddo based on how they feel
// function howIsChild with parameter name of state that returns messages based on the kids status

const howIsChild = (state) => {
    if (state == "Hungry") {
        return "Kid wants food, where snack";
    } else if (state == "Sad") {
        return "Kid is crying, what do we do?";
    } else if (state == "Happy") {
        return "Aww, they're laughing";
    } else {
        return "They're asleep";
    }
};
console.log(howIsChild("Happy"));
console.log(howIsChild());

// Use a table and arrow function to do the same
const kidFeelsTable = { //! this is FASTER
    Hungry: "Kid wants food, where snack",
    Sad: "Kid is crying, what do we do?",
    Happy: "Aww, they're laughing",
}
const howIsKid = (state) => kidFeelsTable[state] || "They're Sleeping...";
console.log(howIsKid("Happy"));
console.log(howIsKid());

/* //! State Machine ---------------------------------------------
    - reads a set of inputs and changes to a different state based on those inputs
    - mathematical model of computation, usually used to design an algorithms

    State: is the set of all variables in a program and their values at any point in time
    - Could be happy now, sad later

    Example: a light switch 
    - on or off
    - flipping the switch will trigger the other state
    - when the "machine" exits the on state, we get a side effect of the light turning off
    - when the "machine" enters the on state, we get a side effect of the light turning on

     https://statecharts.dev/on-off-state-machine.html
A state machine is an alternative way of modeling program state: Instead of defining independent variables, a machine is crafted specifically to handle what states are possible, and when a machine is a given state, what next state is allowed. (from https://statecharts.dev/what-is-a-state-machine.html)

    */

//? Example: traffic light
// create a state object with light color keys with values of an array to the other light color options
// can green go to red: no
// can green go to yellow: yes
// etc vvv

let state = {
    green: ["yellow"], 
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}
let currentState = "green"; // we need to pass this variable "currentState" later

// create a function to handle and transition between states
function enterState(newState) {
    // create a check to see what values are valid and available
    // establish which point in our state object 
    let validTransitions = state[currentState];
    console.log(`\nThe light is currently: ${currentState}`)

    if (validTransitions.includes(newState)) { // check if key includes the state the user wants to change to
        // allow our state to change if true to next state
        currentState = newState; // just reassign it dummy
        return `The light turns: ${currentState}`;
    } else {
        // have a message if state is not available
        //console.log("Invalid state, gross");
        throw `Invalid state: ${currentState} to ${newState}`
    }
}
// return console.log(currentState); // shows start of green
let changeToYellow = enterState("yellow");
console.log(changeToYellow);
let changeToRed = enterState("red");
console.log(changeToRed);
let changeToGreen = enterState("green");
console.log(changeToGreen);
let brokenLight = enterState("red");
console.log(brokenLight);



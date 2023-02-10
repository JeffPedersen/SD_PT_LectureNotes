/* 
    ? While loops: loops thru a block of code while a specific condition is true 

    While Loop Structure:
    while (condition) {
        ... code to run/execute
    }

    - The main purpose for while looks are when the interaction is uncrertain
    - good to use if you dont know when youre not sure when it should end
*/

let n = 1; 
while (n < 10) {
    console.log(`n before addition: ${n}`) // BACKTICKS NOT ''
    n++;
    console.log(`n after addition: ${n}`)
    console.log("-------");
}

let y = 1;  // run debugger here to see whats up
while(y < 5){
    y++;
    console.log(y);
}

let message = "";
let z = 0;
while (z < 5) { // will top at 4
    message = "The number is " + z; 
    z++; // adds 1
    console.log(message)
}

let message = "";
let z = 0;
while (z < 5) { 
    z++;
    message += z; // this one numberfies the string, instead of adding it just takes the number and makes it a string no math
    console.log(message)
}

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
];

let structure = city[0]; // if we change the number it will change the number of item in city going down the list
console.log(structure);

let pos = 0;
while (structure != "empty street") {  // != to not equal
    console.log(`Spider-Man swings from the ${structure}!`) // backtick to grab variable and ${}
    pos++ // ++ rather than pos = (pos +1) cause its cleaner
    structure = city[pos]; // we reassign structure but give it the pos variable which is changing
    console.log(pos, structure); //runs thru and tells you the next pstructure poisition
}
console.log(`Spider-Man lands in the ${structure}!`);

/* 
    ? Do while Loop: also loops thru a block of code while a specific condition is true but...
        ! Loop will run the code ONCE, BEFORE checking if the condition is true and will keep running as long as the condition stays true
            - Instead of checking condition then running

!    Do While Structure: 
!    do {
!        hold the code to run/execute
!    } while (expression)

    - Works just like while loops with the exception that is will run out code block at least once
*/

let num = 5;
do {
    console.log(`The number is ${num}.`);
    num++;
} while (num < 10);

console.log(num); // 10

let result = ``;
let i = 1; // i starts at 1
do {
    i += 1; 
    result += `${i}`; // backticks let you input a var/function
    console.log(`i is ${i} and being added to the string: ${result}.`);
} while (i > 0 && i <= 5);
console.log(`Ending result: ${result}`);

let value = 20; // Do only ran once because 40 is less than 100
do {
    value *= 2;
} while (value > 100);
console.log(value);

// Mock switching accounts from deactivated to activated, use a boolean

let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};
let acctNum = 1;
do {
    // Write a message to show inactive
    console.log(`acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`);
    // Activating message & set acct to true
    console.log("Activating...")
    accounts[`acct${acctNum}`] = true; // square brackets to dive into key
    // Confirmation message
    console.log(`acct${acctNum} is now active: account is set to ${accounts[`acct${acctNum}`]}.`);
    // After account has been activated, add one to account number to move onto next account 
    acctNum++;
} while (accounts[`acct${count}`] == false);
// Finish message
console.log('All accounts are now active.');
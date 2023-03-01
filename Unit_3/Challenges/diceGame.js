/* hey kid... you wanna roll the bones?
    User plays dice game
    Will roll dice up to three times
    Focus on scoring per dice roll
    Focus on totalling score at end of game
    
    ?To Do / pseudoCode / storyBoard
    // -Tell JS what things are with variables
    //     -base score
    //     -total score
    //     -diceRoll
    //     -state of dice (rolled or not rolled)
    //     -number of rolls (max of 3)
    //-Use a dictionary to store values
    // -Use state/state machine to check which action options the player has
    //     - not rolled, roll, score (end the game and printing final total)
    // - Build function to update the player score
    // - Build function to roll die and update the roll count
    // - Build function to check our turn state and advance play state
    //     - Can we roll? Are we done? Is the game not started?
        // 1. check if the action/next action is valid (can we do this?) - if / else
        // 2. if the die is rolled: 
            // - first check if not count at max of 3
            // - if we are still under 3 rolls then we can roll die
            // - total and set score - (REASSIGN SCORE)
            // - make console log
        // 3. if die is to be scored: (CONDITIONAL) print a message with final score & reset starting values (REASSIGN VARIABLES)

    */

// Variables up top
let score = 0; // default starting score 
let dieRollValue; // variable will hold roll value
let stateOfDie = "not rolled"; // current state 
let numberOfRolls = 0; // default starting count of our allowed rolls (1-3) 

// Use a dictionary to store values
const scoring = {
    1: 100,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
}; 

// -Use state/state machine to check which action options the player has
//         - not rolled, roll, score (end the game and printing final total)

let dieState = {
    "not rolled": ["roll"],
    roll: ["roll", "score"], // choosing both gives us the option to end the game early
    score: ["not rolled"],
}

//* Make function to update score as well as print message  to give us feedback
    // We have variable "scoring" to hold totals and "dieRoll" to hold current 
function scoreDie (dict, dieSide) {
    // Create some math to add new roll score value to our base score variable (let score = 0 up top)
    let points = dict[dieSide]; 
    score += points; // alternative "score += dict[dieSide]"
    // console log message of where score is
    console.log(`\nAfter rolling for ${points} points your total score is now ${score}!`)
}

// testing
// scoreDie(scoring, 5);
// scoreDie(scoring, 1);
// scoreDie(scoring, 3);

//* Function to generate a random number [1-6] and increase our roll count variable numberOfRolls (reassignment)
// just picks which side we land on and adds to numberOfRolls (roll count number)
function rollDie() {
    // generate a random # that is less than 6
    dieRollValue = Math.floor(Math.random() * 6 + 1); 
    //console.log("Die lands on: ", dieRollValue); // testing

    numberOfRolls ++; // ++ goes up by 1
    //console.log(numberOfRolls); // testing
}
//* Testing... it works 
// rollDie();
// rollDie();
// rollDie();


//* Function state machine to change state / action, check it and run rest of conditionals 
function playState(newDieState) {
    // find starting state
    // default state is "not rolled", need variable to update as player rolls / checks limit
    let validDieState = dieState[stateOfDie];
    console.log(`\nThe die is currently ${stateOfDie}` )

    // using conditional to check if die action is validDieState is doable
    if (validDieState.includes(newDieState)) {
        
        // set newDieState to stateOfDie
        stateOfDie = newDieState;
        //return `\nThe die is currently ${stateOfDie}`
        // if the stateOfDie is "roll" do the following:
        // if the stateOfDie is "score" do the following
        if (stateOfDie = "roll") {
            // check to make sure we are not at max number of rolls
            if (numberOfRolls ===3) {
                console.log(`\nYou've rolled ${numberOfRolls}, time to pony up the score`);
            } else {
                // if we haven't hit 3 rolls we roll dice and send message
                rollDie(); // we get a random value (1-6) and increase # of rolls
                console.log(`\nYou rolled a ${dieRollValue}! Want to roll again or pony up?`);
                // Score the rolled dice and print message
                scoreDie(scoring, dieRollValue) // calling scoreDie function and passing it scoring dictionary and gives the roll a score
                console.log(`\nYou rolled ${numberOfRolls} time(s)`);
                }
            } if (stateOfDie === "score") {
                // reset all values, print final score message
                console.log(`\nFinal score is ${score}`);
                dieRollValue = "not rolled";
                numberOfRolls = 0;
                score = 0;
            }
        } else {
            console.log(`error`)
        }
}
console.log("\n\n------ Welcome to Dice Game, Round One! ------\n");
playState("roll");
playState("roll");
playState("roll");
playState("score");
console.log("\n------ End of Round One, thanks for playing! ------\n");

function roundTwo() {
  console.log("\n\n------ Welcome to Dice Game, Round Two! ------\n");
  playState("roll");
  playState("roll");
  playState("roll");
  playState("score");
  console.log("\n------ End of Round two, thanks for playing! ------\n");
}

roundTwo();





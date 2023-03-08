//! Very similar to guess the number
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// ! run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE

let whichRoom = []; 
let playerInventory = []; // player starts with empty array

class ClassInventory { // makes objects 
      constructor(name, location) {
          this.name = name;
          this.loc = location;
      }
}
let chestKey = new ClassInventory("Chest Key", "Garden");
let sword = new ClassInventory("Sword", "Barracks");
let gold = new ClassInventory("Gold", "Treasury");
//console.log(chestKey); //test to see if class applies correctly

class ClassRoom { // makes objects 
      constructor(name, desc) {
          this.name = name;
          this.description = desc;
      }
}
let treasury = new ClassRoom("Treasury", "Treasury desc");
let garden = new ClassRoom("Garden", "Garden desc");
let barracks = new ClassRoom("Barracks", "Barracks desc");
let hall = new ClassRoom("Hall", "Hall desc");
//console.log(treasury); //test to see if class applies correctly

let lookupTable = {
  Hall: hall, //* linking object value to key 
  Garden: garden,
  Treasury: treasury, 
  Barracks: barracks, 
}

let state = { // state machine template from lecture
  Hall: ["Barracks", "Garden", "Treasury"], // Hall can go to all three rooms
  Garden: ["Hall", "Garden"], // can only return to hall 
  Treasury: ["Hall", "Treasury"], // can only return to hall 
  Barracks: ["Hall", "Barracks"] // can only return to hall 
}

let currentState = "Hall" // function to handle transitions between states
function enterState(newState) { 
  let validTransitions = state[currentState];
  if (validTransitions.includes(newState)) {
    currentState = newState;
    console.log(`\nWe move into the ${currentState}`); // logs when moves occur
  } else {
    throw `Unable to move from ${currentState} to ${newState}`
  }
}


// Intro

start();
// nest function to actually start the game
// this will help with recalling back to main room
// this will be the looping part
async function start() {
    console.log("\nYou enter the ruins of the palace of Persepolis");
    console.log(`\nOnce a great palace and administrative hub for the Persian Empire. Now lies in ruins. You can still see the finely carved stone reliefs which seem to cover every available inch of space`);
    console.log("\nYou enter into the main room... the Hall");
    console.log("\nYou see three doors");
    gameStart();
    async function gameStart() {
      let moveRoom = await ask(`\nDo you enter the (Barracks) (Garden) (Treasury): `);
      if (moveRoom == "Treasury") {
        enterState("Treasury");
        console.log(`\nYou Look around`);
        console.log(`\nIt has been looted except for a single large locked chest`);
        //! if statement to check player inventory array and check for key
        let hasKey = await ask(`Use the key you have to open the chest? (Yes)?`);
        if (hasKey == "Yes") {
          console.log(`\nUntouched by looters a chest of gold is all yours`)
          //! ... call inventory function to add gold to inventory
          gameStart();
        } else {
          gameStart();
        }
      } else if (moveRoom == "Barracks") {
        enterState("Barracks"); 
        console.log(`\nYou Look around`);
        console.log(`\nYou notice a sword`);
        let pickUpSword = await ask(`\nPick up the sword? (Yes) or (No)`);
        if (pickUpSword == "Yes") {
          sword.loc = "playerInventory";
          console.log(`\n You pick up the sword and return to the hall`);
          gameStart();
        } else {
          gameStart();
        }
      } else if (moveRoom == "Garden") {
          enterState("Garden"); 
          console.log(`\nYou see overgrown plants and trees`);
          console.log(`\nYou see something inside the hollow of a particularly ominous tree`);
          let pickKey = await ask(`Do you reach your hand in the tree (Yes) or (No)`)
          if (pickKey == "Yes") {
            //! call function to add to inventory
          } else if (pickKey == "No") {
            console.log(`\nI dont blame you, probably would have lost your hand`)
            let returnNow = await ask(`Return to Hall?`);
            if (returnNow == "Yes") {
              enterState("Hall");
              gameStart();
            } else {
              console.log(`\nYou take in the view for a while before returning from the door you came`);
              gameStart();
            }
          }
      } else {
        console.log(`I am not sure of that command`);
        gameStart();
      }
      //process.exit();
    }  
  
}

function enterState(newState) { 
  let validTransitions = state[currentState];
  if (validTransitions.includes(newState)) {
    currentState = newState;
    console.log(`\nYou are in the ${currentState}`);
  } else {
    throw `Unable to move from ${currentState} to ${newState}`
  }
}

//! needs work
function moveItem(source, destination, item) { // making function for repetition
  splice(0, 1, "black"); // targets first item 1 to remove, and "to add new")
  delete source[item];
}

/* Pseudo Code
player 
  //// - inventory = array[]
    - add items to it via .push
      - inventory['orange'] ( reference array element by its identifier and push/pop it)
  - status = state
  - status = state  
      player['inventory'].push(library['itemsInRoom']['cookBook']);
      delete library['itemsInRoom']['cookBook'];
  - status ( state )

  make function to move item from room inventory to player inventory

  Rooms
  - Nested objects
  - allowed actions (in the nested objects) 
  - has array of items 
  - description State Machine
  - connection = State Machine
  - inventory = array[]
  - state array for transitions 

  main desc "Once a great palace and administrative hub for the Persian Empire. Now lies in ruins. You can still see the finely carved stone reliefs which seem to cover every available inch of space"
  garden disc "Once filled with a plethora of fruiting trees and vines. Maybe something there is something valuable here still"
  treasury disc "It contains the vast wealth of Persepolis and a large number of archival documents"
*/


//! Timeline
/* 
2-28 assignment
3-1 story of persian castle 
    give the task of moving item to function
    pseudo code 
3-2 establish given variables
3-3 more pseudo code 
3-4 problem with jscode, unable to run in node, fixed via restart
3-5 sick/class
3-6 replace object array with classes
    finish if else flow
3-7 lookupTable correctly linked
    introduced gameStart to successfully transition rooms
    splice to function?
3-8 
*/


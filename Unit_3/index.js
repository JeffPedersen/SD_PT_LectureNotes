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
let chestKey = new ClassInventory();
chestKey.name = "Chest Key";
chestKey.loc = "Garden";
let sword = new ClassInventory();
sword.name = "Sword";
sword.loc = "Barracks";
let gold = new ClassInventory();
gold.name = "Gold";
gold.loc = "Treasury";
//console.log(gold); //test to see if class applies correctly

class ClassRoom { // makes objects 
      constructor(name, desc) {
          this.name = name;
          this.description = desc;
      }
}
let treasury = new ClassRoom();
treasury.name = "Treasury";
treasury.desc = "Treasury desc";
let garden = new ClassRoom();
garden.name = "Garden";
garden.desc = "Garden desc";
let barracks = new ClassRoom();
barracks.name = "Barracks";
barracks.desc = "Barracks desc";
let hall = new ClassRoom();
hall.name = "Hall";
hall.desc = "Hall desc";
//console.log(treasury); //test to see if class applies correctly

let state = { // state machine template from lecture
  "Hall": ["Barracks", "Garden", "Treasury"], // Hall can go to all three rooms
  Garden: ["Hall"], // can only return to hall 
  Treasury: ["Hall"], // can only return to hall 
  Barracks: ["Hall"] // can only return to hall 
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

let hasRanOnce = false;
// Intro
console.log("\nYou enter the ruins of the palace of Persepolis");
console.log(`\nOnce a great palace and administrative hub for the Persian Empire. Now lies in ruins. You can still see the finely carved stone reliefs which seem to cover every available inch of space`); // This is above to not clutter the dialog

start();

async function start() {
    console.log("\nYou enter into the main room... the Hall");
    console.log("\nYou see three doors");
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
        return start();//! how to return and prompt moveRoom again
      }
    } else if (moveRoom == "Barracks") {
      enterState("Barracks"); 
      console.log(`\nYou Look around`);
      console.log(`\nYou notice a sword`);
      let pickUpSword = await ask(`\nPick up the sword? (Yes) or (No)`);
      if (pickUpSword == "Yes") {
        //! call function to add to inventory
        return start();//! how to return and prompt moveRoom again
      } else {
        return start();//! how to return and prompt moveRoom again
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
            return start();//! how to return and prompt moveRoom again
          } else {
            console.log(`\nYou take in the view for a while before returning from the door you came`);
            return start();//! how to return and prompt moveRoom again
          }
        }
    } else {
      console.log(`I am not sure of that command`);
      return start();
    }
    
  process.exit();
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
  source.push(destination[item]);
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
*/


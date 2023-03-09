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

class ClassLocation { // makes objects 
  constructor(name, desc, inv) {
      this.name = name;
      this.description = desc;
      this.inventory = inv;

  } // by moving ClassLocation above I can place the room variables in my InventoryItems
}
let treasury = new ClassLocation("Treasury", "Treasury desc", "gold"); 
let garden = new ClassLocation("Garden", "Garden desc", "key");
let barracks = new ClassLocation("Barracks", "Barracks desc", "sword");
let hall = new ClassLocation("Hall", "Hall desc");
//let inventory = new ClassLocation("Inventory", "Whats in your pockets");
console.log(treasury.inventory); //test to see if class applies correctly

class InventoryItem { // makes objects 
      constructor(name, location) {
          this.name = name;
          this.loc = location;
      }
}
let chestKey = new InventoryItem("Chest Key", garden);
let sword = new InventoryItem("Sword", barracks);
let gold = new InventoryItem("Gold", treasury);
console.log(chestKey.loc); //test to see if class applies correctly

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

function enterState(newState) { 
  let validTransitions = state[currentState];
  if (validTransitions.includes(newState)) {
    return newState;
    console.log(`\nWe move into the ${currentState}`); // logs when moves occur
  } else {
    throw `Unable to move from ${currentState} to ${newState}`
  }
}

//! TODO
// press i for inventory
// drop inventory
start();
async function start() {
    console.log("\nYou enter the ruins of the palace of Persepolis");
    console.log(`\nOnce a great palace and administrative hub for the Persian Empire. Now lies in ruins. You can still see the finely carved stone reliefs which seem to cover every available inch of space`);
    console.log("\nYou enter into the main room... the Hall");
    console.log("\nYou see three doors");
    
    gameStart();
    
    async function gameStart() {
      let moveRoom = await ask(`\nDo you enter the (Barracks) (Garden) (Treasury): `);
      try { // OH BOY A FANCY NEW STATEMENT
        let currentState = enterState(moveRoom);
      } catch {
        console.log(`Whoops!`);
      }
      
      if (moveRoom == "Treasury") {
        console.log(`\nYou Look around`);
        console.log(`\nIt has been looted except for a single large locked chest`);
        let hasKey = await ask(`\nDo you have a key you have to open the chest? (Yes) or (No)?`); // this will act as my "immovable object" in the readme prompt
        if (hasKey == "Yes") {
          console.log(`\nYou check your inventory`);
            if (playerInventory.includes("key")) {
              console.log(`\nUntouched by looters a chest of ${treasury.inventory} is all yours`);
              console.log(`\nYou fill your pockets full of ${treasury.inventory} and return thru the door you came`);
              playerInventory.push(treasury.inventory);
              gameStart();
            } else {
              console.log(`\nYou lack the key, you're inventory currently contains... ${playerInventory} better keep searching`)
              gameStart();
            }
        } else {
          gameStart();
        }
      } else if (moveRoom == "Barracks") {
        console.log(`\nYou Look around`);
        console.log(`\nYou notice a sword`);
        let pickUpSword = await ask(`\nPick up the sword? (Yes) or (No)`);
        if (pickUpSword == "Yes") {
          playerInventory.push(barracks.inventory);
          console.log(`\n Inventory is contains ${playerInventory}, now back to the hall`);
          gameStart();
        } else {
          gameStart();
        }
      } else if (moveRoom == "Garden") {
          console.log(`\nYou see overgrown plants and trees`);
          console.log(`\nYou see something inside the hollow of a particularly ominous tree`);
          let pickKey = await ask(`\nDo you reach your hand in the tree (Yes) or (No)`);
          if (pickKey == "Yes") {
            console.log(`\nFortune favors the bold, you pick out a ${garden.inventory}`);
            playerInventory.push(garden.inventory);
            console.log(`\nInventory is contains ${playerInventory}, now back to the hall`);
            gameStart();
          } else if (pickKey == "No") {
            console.log(`\nI dont blame you, probably would have lost your hand`)
            let returnNow = await ask(`\nReturn to Hall?`);
            if (returnNow == "Yes") {
              // enterState("Hall");
              gameStart();
            } else {
              console.log(`\nYou take in the view for a while before returning from the door you came`);
              gameStart();
            }
          }
      } else if (moveRoom == "Exit") {
        console.log(`\nYou exit the palace of Persepolis`); 
        process.exit();
      } else {
        console.log(`\nI am not sure of that command`);
        gameStart();
      }
      //process.exit();
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
    TRY CATCH
3-8 
*/


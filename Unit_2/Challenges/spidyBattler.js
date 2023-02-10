/* 
    Let's build something cool!
    We will make a Spider Man battle program that randomly pits Spidy vs a foe.

    - Set Spidy's HP
    - Create a villain array of villain objects for Spidy to battle
    - Make something to randomly pick a villain
    - Use a do while loop to monitor if the villain's HP is above 0
    - In the while loop make attacks the effect HP of both Spidy and the Villain
        - Add some console.logs to give us messages throughout the battle
    - Create an ending message with a conditional on who won the battle
*/

let spidyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin", // instead of object its an array object that lives at badGuys[0]
        hp: 15
    }, // to separate items within an array use a comma
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt-Man",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    },
];
// console.log(badGuys.length); 
// Created random number not greater than array length
let rand = Math.floor(Math.random() * badGuys.length);           // always () after method
// Grab random Villain from array
let Villain = badGuys[rand];
console.log(Villain);

// Message on who appeared

console.log(`${Villain.baddie} has appeared and is up to no good!`);
do {
    // Take out the thug ASAP
    if (Villain.baddie == "Thug") {
        console.log('Spider-Man webs the Thug');
        break;
    }
    // Message & attack from Villain
    console.log(`${Villain.baddie} hit Spider-Man!`)
    spidyHP--; // Villain is only hitting for 1
    console.log('Spider-Man HP: ', spidyHP);
    // Make random spidy attack
    spideyHIT = Math.floor(Math.random() * 3); // random() give 1-2 / * 3 multiply by 3
    console.log(`Spider-Man hits ${Villain.baddie} for ${spidyHit} damage!!!!`);
    // Villain HP math and message
    Villain.hp -= spideyHIT;
    console.log("Villain HP: ", Villain.hp);
    if (spidyHP === 0) {
        console.log("Spider-Man fainted")
        break;
    }


} while (Villain.hp >= 0) // grabs element Villan.hp
// Conditionally prints a win or loss
if (Villain.hp <= 0) {
    console.log(`Spider-man captured ${Villain.baddie}`);
} else {
    console.log(`${Villain.baddie} wins this round`);
}
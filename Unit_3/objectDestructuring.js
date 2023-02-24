/* //! Object Destructuring 
    - Allows us to unpack values from an object into distinct variables.
    - Similar syntax as objects literals, but the curly bracers {} are on the left side of the assignment operator (=)
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };
  theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Examples of destructuring 
const { characters, seasons } = theSimpsons;
//console.log("Destructuring Characters: ", characters); // pulls all the characters from our array and consol logs them
//console.log("Destructuring Characters: ", seasons); // pulls all the seasons from our array and consol logs them

characters.push("KASNDKA") // typo on purpose?
console.log(characters[5]); 
characters[5] = "Moe";
console.log(characters[5]); // reassign item number 5

const { est: established, currently_running: on_air } = theSimpsons; // reassign 
console.log(established);
console.log(on_air);

console.log("Doesn't change original keys: ", Object.keys(theSimpsons));

// The point of destructuring isnt to break apart the object but to let us access different parts better

// ! Spread operator with objects
// ...

const simpsonCharacters = {
    simpsonsHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"], // simpsonHouse is our key, the rest is our array
    moesTavern: ["Moe", "Barney"]
}
// Use spread operator to combine multiple objects into one
const generalLocations = {
    park: "Statue",
    beach: "Dock",
    lake: "Three-eyes Fish"
};
const locations = {
    ...simpsonCharacters, // we can spread operator to copy/paste an array
    dmv: ["Patty", "Selma"], // comma after or else 
    ...generalLocations
}
locations.beach = ["dock", "fisherman"] // reassigned beach to different array. useful for typos / does not change the original
console.log(locations);
console.log(generalLocations); // logs the original generalLocations

//! Object
let sumoWrestler = [
    // matched pair = property: key value pair
    rank, "Yokozuna", 
    beltColor, "Black",
    age, "34",
    active, false
]


/* 
? Object literals
    - when our values are written within our keys. its "hard coded"
    ! Structure:
        keyword objectName = {
            key: value
        }
        let ourObject = {
            firstKey: "string"
        }

    JS considers this a dictionary. Most languages already have a dictionary defined but javascript is *special*
*/

let theSimpsons = {
    id: 1, // in a database ids are usually defined for quick grbbing
    est: 1989,
    genre: "animated",
    seasons: { // object
      "season one": [ // key is season one, contains array []
        {
          episode_title: "Simpson Roasting on an Open Fire", // values
          aired: "1989-12-17", // values
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

//* Dot Notation & Square Brackets
console.log(theSimpsons.genre);  // animated / hover over theSimpsons to see all the stuff
console.log(theSimpsons["est"]); // 1989
console.log(theSimpsons.seasons['season one']); // multi word key: must use square brackets

theSimpsons.characters = ["homer", "bart", "list", "marge", "maggie"]; // we can give more data to theSimpsons by this method
theSimpsons.showRating = 10 
console.log(theSimpsons);

// How to add other characters to theSimpsons
theSimpsons.characters.push("Ned");
console.log(theSimpsons);

// change the aired date of episode 2 in season 1 to jan 14th 1990
theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1]);
console.log(theSimpsons.seasons["season one"][2][1]); // "1990-01-14"






//? -----------------------------------------------------------------------------






//? -----------------------------------------------------------------------------





//? -----------------------------------------------------------------------------
//! Object methods

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

//* Object.keys() returns an array of the keys in object{}
console.log("Keys: ", Object.keys(theSimpsons)); 
//* Object.values() returns an array of the values in object{}
console.log("Values: ", Object.values(theSimpsons)); 
//* Object.create() // uses an existing object{} to frame out a new object{}, we use a variable to store the base of the object creation
const futurama = Object.create(theSimpsons);
// console.log(futurama);
futurama.id = 2;
futurama.est = 1999;
futurama.genre = "animated";
console.log(futurama);

//* delete object.key
    // kate has never used 
futurama.currently_running = false;
console.log("Before: ", Object.keys(futurama));
delete futurama.currently_running;
console.log("Before: ", Object.keys(futurama));

//* more object methods exist....

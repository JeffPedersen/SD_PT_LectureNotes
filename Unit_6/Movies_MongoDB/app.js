// Connects our .env file to our proj
require("dotenv").config(); //! THIS GOES FIRST OR IT GETS UPSET
const express = require("express");
const app = express();
// Points our environment file and puts the value of PORt from that variable into this PORT variable 
const PORT = process.env.PORT;
const log = console.log;

//=============== CONTROLLERS ================
const users = require("./controllers/user.controller");
const movies = require("./controllers/movies.controller");

//=============== MIDDLEWARE =================
// importing in middleware
const validateSession= require("./middleware/validate-session")

// Require in the mongoose middleware, pulled from node_modules
const mongoose = require("mongoose");
// Create variable for our connection address variable from the .env
const MONGO = process.env.MONGODB;

/* 
Use middleware handled/made by mongoose: 
    - Helps us connect to our DB and create objects in it
    - Establishes connection route to the DB with our .env var (This is a stateful connection).
    - We establish/create our connection with the middleware method: .connect()
    - Allows us to define the Collection we are targeting.
    * Doesn't display until there is a document within the collection.
*/
mongoose.connect(`${MONGO}/moviedb`);
// connects our compass to the database

// Create a variable that is an event listener to check if connected 
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => log(`Connected: ${MONGO}`));

// Added to allow us to accept JSON data from the body of our client.
app.use(express.json());

// =============== ROUTES TO CONTROLLERS =================
// http://localhost:4000/user
app.use("/user", users);

// One way to implement validate session, directly in app.js
// All routes below will require validation(logged in user w/ valid token) when used this way
// app.use(validateSession);

// Another way to implement validate session, is in movie.controller.js

// http://localhost:4000/movies
app.use("/movies", movies);

app.listen(PORT, () => log(`Movie Server on Port: ${PORT}`));


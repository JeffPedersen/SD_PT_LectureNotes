// Access Express and it's methods; we can do that via require()
const express = require('express'); // being pulled from node modules 
// We want a simple var to make calls, set express to app
const app = express(); // simple our method calls

//? Create a PORT number to run the pp on our local machine
// PORT number is a way to identify a specific process
// Server port w/in localhost. Using "all caps" indicated a general variable
const PORT = 4000;

// -----------------------Required file Paths-------------------------
//? Create a variable that imports the practice controller (gives app.js access)
const practiceController = require(`./controller/practice.controller`)

const auth = require("./controller/auth.controller");
const routes = require("./controller/routes.controller")
// Importing the auth controller routes for the app to reference 
const { logTime } = require("./helpers");
// require in the index.js form helpers(./helpers) w/ object destructuring


// --------------------App functionality/what it does -------------------
// telling the express app to first use this middleware function
app.use(logTime);



//? Provide us access to use JSON within our routes
// call on our app var, use the .use() method to tell our app express.json() -which means use json pleas express
app.use(express.json());

app.use(express.urlencoded());
// Parses the body(of the request) from our browser so it can display the request

// use a method call .use(), this points our express app to where it should go


//? Use a method called .use(), this points our express app to where it should go
// Call the app var, then use the .use() method, specify using express to target the public folder
    // When a file is not specified, JS always defaults to seeking an index file.

app.use(express.static(`${__dirname}/public`)); // tell it to automatically render a static HTML page at what is in /public
// __dirname - node way for us to choose directory name
console.log(`pathday: `, __dirname); // route us to the public folder

//? Building route to practice controller
// First we call our app var, then we will use the .use() method, we pass use a string that becomes the url route and the controller that route takes you to
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js.
    ex: localhost:4000/practice
*/
app.use(`/practice`, practiceController); // used to route to different controllers


// Building route to auth controller: http://localhost:4000/todo
app.use("/todo", auth);

// Route to routes controller: http://localhost:4000/routes
app.use("/routes", routes);



//? Create a method that "listens" for us starting our application 
// This will need our PORT number and a callback function
// First call our app var, use the .listen method, pass the method the port var and create a callback function (CB) to give us some feedback(console.log)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//! To start the server, in terminal at the proj directory run command "nodemon"


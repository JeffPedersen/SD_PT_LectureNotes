//! API 
/*
        - Application programming interface
        - Wonderful way to access data we are trying to obtain
            - Data that is not in our local project
            - example: data stored in database, cloud storage, or someone elses public database
        - Allows client (front end of webpage, program, app) to communicate with the server
        - Allows HTTP requests and response lifecycle
*/

//! ? AJAX
/* 
    - Asynchronous JavaScript and XML
    - Might see if working with older code bases
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.
    Pros:
        - Page components loaded individually
        - New data updated regularly    
    Cons:
        - JS must be enabled
        - Adds more complex aspects.
        - refreshes the page state and stores info can bloat.
        - Difficulty for screen readers.
    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringing it all together
    - Not Promised based.
    *jQuery
        - AJAX often works with it
        - A library that helps us handle the front end.
        - Prior to DOM and Fetch
        - still used but dated
    example:
        - timed updates to comments (replies)
        - infinite scrolling
        - dynamic search results
*/

//! Fetch
/*  - Before fetch(), we have had to use an httpRequest thru the above noted system
    - Is an API
    - A global method that requires 1 argument
        - The location of data (url) we are trying to obtain
    - Handles both request and response
    - Returns a promise
        - Allows us to access our resolves (chain .then()/.catch() )
        - resolves = ok got the thing (or didnt), hey code do this
    https://www.w3schools.com/jsref/api_fetch.asp
    https://developer.mozilla.org/en-US/docs/Web/API/fetch
*/

const log = console.log; // Us creating a shortcut variable to hold the console log

// Store API URL in a global variable
const testEndPoints = "https://dog.ceo/api/breeds/image/random";
// log(testEndPoints);
// log(fetch(testEndPoints)); // shows that fetch returns a promise, promise showed we got a success of 22

// Write a fetch: use the fetch global method and pass the url variable
fetch(testEndPoints) // fetch goes grans promise testEndPoint
    .then((response) => { 
        log("first fetch .then", response); // response console logged
        return response; // returning the response for the next .then()
    })
    .then((res) => {
        log("second fetch .then", res.json);
        return res.json(); // json-ifying the response into something we can use and returning it
    })
    .then((data) => {
        log("third fetch .then", data); // logging the json object (now we can use it!)
        seeDogPic(data);
    });

//! JSON (what we used above^)
/*  - Javascript Object Notation
        - very lightweight way to store and transfer data
    
    Syntax & structure:
    {
        "keys": "values",
        "keys": "values",
        "keys": 0
    }
    - Everything is wrapped in quotes (with minor exceptions)
        - Integers
        - boolean
    - Data is all separated with commas
    - CANNOT hold comments or functions

    - .json() method helps to convert our promise response into something useable(object)
*/

// how can we see the dog pic from the fetch
// build a function where we create dom elements, assign them values, and append them to the parent element/html
let body = document.querySelector("body");
function seeDogPic (jsonDataFromFetch) {
    log("in seeDogPic func", jsonDataFromFetch);
    
    // Create elements
    let img = document.createElement("img");

    // assign img attributes
    img.src = jsonDataFromFetch.message;

    // Append to body
    body.appendChild(img);
}

//const log = console.log;
//? JSON.parse(string)
let myText = `{ "name": "Jeff", "has beard": true }`;
// log(myText);
// log(JSON.parse(myText));
let testObj = JSON.parse(myText);
log(testObj.name);
testObj.name = "Pedersen";
log(testObj);

/* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. use .json() on response to finish reading entire ReadableStream.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other functions
            - whatever your project requires.
    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even even if its a 404 or 500 (internal / external server error)
*/

// See another fetch example
const url = "https://meowfacts.herokuapp.com/";

// an example of a fetch function

function getCatFacts() {
    fetch(url)
        .then((r) => r.json())
        .then ((d) => log(d.data[0]))
} 
//getCatFacts();

// Async/Await Fetch
const getCatFacts2 = async () => {
    let res = await fetch(url); // grabs stuff from catfacts
    let result = await res.json(); // json-ifies the result
    let data = result.data[0];
    log(`In Async/await:`, data); // see the fact
}
getCatFacts2();

//! Local fetch to JSON file
//  Project has the data we want to fetch from
function fetchFellowShip() {
    fetch("./local.json") // passing our file location
        .then(res => res.json())
        .then(data => {
            let members = data.fellowship;
            //log(members);
            for (m of members) {
                log(m); // logs
                log(m.name); // logs each name
            }
        })
}
fetchFellowShip();

//! Error Handling with try/catch
// Async/await
async function getCatFact3() {
    try {
        let response = await fetch(url);
        let results = await response.json();
        let data = results.data[0];
        log("Try block of try/catch:", data);
    } catch(err) {
        console.error(err);
    }
}

getCatFact3();

//* Error handling with resolvers (.catch())

fetch(url)
    .then(r => r.json())
    .then(d => log("---------> Fetch resolver:", d.data[0]))
    .catch((err) => console.log(err));


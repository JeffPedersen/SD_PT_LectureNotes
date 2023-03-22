// We need to call on our packaged functionality in order to use it
// Create a variable that imports the route engine (the functionality that lets us build routes) from express

const router = require(`express`).Router();


// Create our first read/GET route
//  - First use our router variable, then detail which type of method we want to use: CRUD method
//  - To display to the browser, we use GET method (read in CRUD)
//  - What the Get method needs:
//  - the pathway noted as a string
//  - a callback function to handle the request and response
//  - req, res
//  - Browsers always do a GET as a default
router.get(`/hello-world`, (req, res) => { // req=request, res=response
    res.send(`Hello World`);
});






/*
!   Challenge
    - [x] Request Type: POST
    - [x] Endpoint: "greeting"
    - [x] Send: "Good Afternoon!"
    - [x] Test: Postman
        * hint: GET should be POST  
*/
router.post('/greeting', (req, res) => {
    // add a status code for us to report
    // .status (200)
    res.send('Good Afternoon');
});

//? Goal: write a route that will pull data from JSON
// http://localhost:4000/practice/json
router.post('/json', (request, response) => {
    // This console log will be printed in VScode terminal that is running the server
    console.log(request.body); // if you get a request, show me the contents
    // Make a way to print a response in postman using destructuring
    const { name } = request.body; // destructuring 
    response.status(200).send(`I said ${name}`);
})

//? Create a "wildcard" route to patch any bad routing 
router.get("*", (req, res) => {
    /* 
        - "*": accounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */
    
    res
        .status(404)
        .send(`<img src="https://http.cat/404" alt="status code 404"/>`);
});


// Exporting the router: makes the contents available other places, gives functionality to other files
module.exports = router;




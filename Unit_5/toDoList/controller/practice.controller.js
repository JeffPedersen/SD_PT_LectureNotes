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
    - [ ] Test: Postman
        * hint: GET should be POST  
*/
router.post('/greeting', (req, res) => {
    // add a status code for us to report
    // .status (200)
    res.send('Good Afternoon');
});


// Exporting the router: makes the contents available other places, gives functionality to other files
module.exports = router;




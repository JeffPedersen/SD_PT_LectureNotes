/* 
    - Created a "helpers folder" -> helper is a common folder name for helper functions/middleware/etc
    - Middleware is a function that accesses our request, response, and moves on to other aspects of our code
    - Middleware can be customized to your projects needs
        - ex: encrypting passwords/emails 
*/

//? Create a function called "logTime":
// This will have three parameeters (request, response, next)
// Run logic in the code block

function logTime(req, res, next) {
    // Only see/get request obj in console when we hit "send" in postman
    //console.log(req);

    // todo: 
    // [x]continue after being called
    // [x]create a date for when request was made
    // [x]view the request date
    let date = new Date(); // creating a variable date with the Date datatype class constructor
    let time = new Date();
        req.datePosted = date.toLocaleDateString(); // the method we're using = creating a string for our local date
        req.timePosted = time.toLocaleTimeString();
    
    // build console.log() to check if its working / show us the time of request
    console.log("Request datePosted key: ", req.datePosted, "\ntime: ", req.timePosted); //Request datePosted key:  3/23/2023
    
    // app continue out of the function and onto what's !!!NEXT!!!
    next();
}

/* 
    - module.export
        - exporting an obj
        - we can make a variety of functions and store them with keys
        - how we can make functionality usable in other places (other folders)
*/

module.exports = {
    logTime: logTime
};
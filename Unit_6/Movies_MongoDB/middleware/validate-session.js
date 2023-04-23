// Bring in JWT to access it's token methods/functionality 
const jwt = require("jsonwebtoken");
// bring in our user model to reference
const User = require("../models/users.model")


// Build middleware
const validateSession = async (req, res, next) => {
    // Middleware still has access to the request, response, and requires the next() function to move past it.
    //* remember the timeLog() helper within the ToDo_List
    try{
    //1. Take token provided by request object (headers.authorization)
    const token = req.headers.authorization;
    console.log(token);

    //2. Check the status of token. (expired?)
    // JWT .verify(string, secret)
    const decodedToken = await jwt.verify(token, process.env.JWT);
    console.log(decodedToken);
    // our decoded token makes the user id and token exp available
    // {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2M0ZWNjMDgwOTAyNDViZWVhMTI1OCIsImlhdCI6MTY4MjI3OTYxOCwiZXhwIjoxNjgyMzY2MDE4fQ.hRE79Gqd9ZW2W2GeYfTQvdXO_KawM-0-1nnlsNO8KWc}

    //3. Provide response - if valid, generate a variable that holds user info.
    // use the .findByID() to check for a user that matches token user id
    const user = await User.findById(decodedToken.id);
    if (!user) throw Error("User not found");

    // Creating a new key within our request object to store our user information
    req.user = user;

    // Good idea to check with a console.log
   ;
    return next(); // moves uys to our routes/endpoint
    } catch (err) {
        res.json({message: err.message});
    };
}


// export the function
module.exports = validateSession;
const router = require("express").Router();
//  we need to import our model so that we have access to the document schema
const User = require("../models/users.model");
/* 
Require in the bcrypt dependency by sorting it in a variable
Bcrypt will be included in our controller --> add bcrypt in any file where we ant to encryption to take place
*/
const bcrypt = require("bcrypt");
// Require in the JSON web token dependency by storing it in a var per usual
const jwt = require("jsonwebtoken");
// Create a variable to hold the secret from our .env for the token 
const SECRET = process.env.JWT;

// Create a function to show how our password is being used/encrypted (just a demo)
// const testingBcrypt = (password) => {
//   // Storing in the variable name encrypt th ability to use bcrypt's hashSync method to encrypt our "password"
//   let encrypt = bcrypt.hashSync(password, 13);
//   console.log("ENCRYPTED PASSWORD", encrypt);
// };

// testingBcrypt('myPassword');
// testingBcrypt('myPassword');
// testingBcrypt('secure_password123');

/* 
    ** IMPORTANT NOTE **
    It is required to use async/await with our callback functions per MongoDB.
        - It's a good idea regardless to do this simply because we are using request outside of our own workstation.
    We will build the rest of the endpoint/route with a request as response as we did in the last unit. Await/Async is the only new addition. 
*/

router.post("/signup", async (req, res) => {
    //res.send("Connected, hit signup endpoints");
  
    try {
      // Creating a new object based off the Model Schema.
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        // password: req.body.password, // Should not store plain text passwords into the db
        //We want to pass it the password provided by the user, salt 13 times, and add to db
        password: bcrypt.hashSync(req.body.password, 13)
      }); // using values from req.body to form our object.
  
      const newUser = await user.save(); // Writes to database. Returns a response - why it should be an "await".
  
      // Create a token using the sign method of jwt, (payload, message, expr)
      // The payload should be the user id, secret message should eventually be in the .env
      const token = jwt.sign({ id: user._id }, SECRET, {expiresIn: "1 day"});

      res.status(200).json({
        user: newUser,
        message: "Success! User Created!",
        token,
      });
    } catch (err) {
      res.status(500).json({
        ERROR: err.message,
      });
    }
  });
  

  /* ================Login Endpoint================== */

  // Login endpoints use the .post() method as well
  // Endpoint: http://localhost:4000/user/login
  /* 
    request body: req.body
    {
      "email": "coolcats@gmail.com"
      "Password": "byebitch99"
    }
  */
  router.post("/login", async (req, res) => {
    // res.send(req.body.email);
    try {

        //1. Capture data provided by user (body).
      const { email, password } = req.body;

        //2. Check database to see if email supplied exists
          // *.findOne() is a MongoDB method that accepts a query as an argument. Returns an instance of a document(user JSON obj) that matches.
          // { email is key for what db is searching for : email = req.body.email from request}
          const user = await User.findOne({email: email});
          console.log(user); // check to see if .findOne is working, should see user data in {} in terminal

          // Write error to catch if no user matches
          if (!user) throw new Error("404User not found ");
        //3. If email exists, consider if password matches (decrypt).
          // .compare() method from bcrypt takes in 2 params (password from req.body, hashed pass from DB)
          const passwordMatch = await bcrypt.compare(password, user.password);

          // writes an error to catch if password does not match
          if (!passwordMatch) throw new Error("email or pass does not match");
          console.log(passwordMatch); // returns true if matching

        //4. After verified, provide a jwt token
        const token = jwt.sign({ id: user._id }, SECRET, {expiresIn: "1 day"});

        //5. response status returned
          res.status(200).json({
            message: "Login success",
            user,
            token
          })

    } catch (err) {
      res.status(500).json({
        msg: err.message
      })
    }
  });

module.exports = router;

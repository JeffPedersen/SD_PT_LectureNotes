const router = require("express").Router();

// Build a .post() with a url of /register: http://localhost:4000/todo/register
router.post("/register", (req, res) => {
    // Check the middleware is running 
    console.log("\n In auth controller: ", req.datePosted, req.timePosted);
    // Check Headers of req
    console.log("\n Headers: ", req.headers);
    // Check body of req
    console.log("\n Body: ", req.body);


    try {
    // Dive into the req body and assign values to variables. objects destructuring 
    const {firstName, lastName, email, password } = req.body;

    console.log(potato); // Only to trigger catch

    res.status(200).send({
        fullName: `${firstName} ${lastName}`,
        email: email,
        //password: password,
        date: req.datePosted,
    })
    } catch (err) {
        res.status(500).send(
            `<img src="https://http.cat/500" alt="status code 500"/>`
        )
    }
});












module.exports = router;
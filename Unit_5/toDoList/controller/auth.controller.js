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


/* Use the URL of the page to query something and get a response
    This has particular syntax
    - Anything after the endpoint can be extracted from it.
        ex: /todo/query/?firstName="John"
    - If querying multiple properties, we use the & to divide them
    ex: /query/?firstName=Kate&lastName=Lockhart&email=email@email.com
    Build a query in a GET route
*/

router.get("/query/", (req, res) => {
    // console.log(req.query); An object of the key and value after the second forward slash { firstName: 'Jeff' }

    try {
        const{ firstName, lastName, email, password } = req.query;
        // values passed within URL need to match
        // ex: /query/?firstName=John&lastName=Doe  etc.

        res.status(200).json({
            status: "New user created!",
            results: {
                first: firstName,
                last: lastName,
                email: email
            },
        });
    } catch (err) {
        res.status(500),json({
            results: "rejected",
            error: err
        });
    }


});








module.exports = router;
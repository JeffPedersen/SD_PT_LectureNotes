const router = require("express").Router();
const clog = console.log();

// Access our "db" by requiring it
const db = require("../helpers/db.json");
// FS library pulled from Node. This allows us to manipulate files
// https://www.tutorialsteacher.com/nodejs/nodejs-file-system
// https://nodejs.org/api/fs.html
const fs = require("fs");


/* Parameters  
    - Search parameters
    - Help us target specific set of data so that we can find one to update/del
*/

// TODO: ////////////////////////////////////////////////////////////////////////
// TODO GET ONE ITEM
// TODO: ////////////////////////////////////////////////////////////////////////
/*   build a route to GET one item from the "db"
    Syntax: 
    URL:    /:id
    - the : denotes a parameter value. The endpoint is thus expecting a reference value (to take in a value)
    Ex: /3  the id is 3
    example URL w/ a parameter:
        http://localhost:4000/routes/1

        - "1" would reference a parameter or flexible string
            - This could be the name of anything
            - It all depends on how we build our logic

        IDs: usually a db will create an id automatically per data item
            - IDs are meant to be unique value, we target it because it is unique
*/
router.get("/:id", (req, res) => {
    //console.log(req.url); // Show us our endpoint
    //console.log(req.params); // Detail an obj with a key of "id" & the value within
    //console.log(req.params.id);

    /* 
        - used to help us locate one item in our database.
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several items.
    */
    try {
        // use obj destructuring: id is equal to /#, /:id
        let {id} = req.params;
        let results = db.filter(i => i.id == id);  //? setting variable results to equal whatever item in the db that has the same id as the variable ids value .filter() method checks each item in the array till it finds the one who's id matches
        //console.log("Results: ", results);

        res.status(200).json({
            status: `Found Item at id ${id}`, 
            results,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// TODO: ////////////////////////////////////////////////////////////////////////
// TODO GET ALL ITEM
// TODO: ////////////////////////////////////////////////////////////////////////
// build a route to GET all items in the "db"
router.get("/", (req, res) => {
    try {
        res.status(200).json({
            results: db // returns whole database
        })
    } catch (err) {
        res.status(500).json({
            error: err.message // tell us whats wrong
        })
    }
});

// TODO: ////////////////////////////////////////////////////////////////////////
// TODO POST NEW 
// TODO: ////////////////////////////////////////////////////////////////////////
// build a route to POST a new to do list item
router.post("/", (req, res) => {
    try {
        // Grab data from the req body(via postman) and log it
        const toDoItem = req.body;
        //console.log(toDoItem);

        // 1. The path needs to be be relative to where fs is located (node_modules), NOT from the controllers location.
        //                  1
        fs.readFile("./helpers/db.json", (err,data) => {
            // quick conditional to deal w/ any error
            if (err) throw err;

            // Parses the JSON file and provides an array of our objects back so we can do stuff with it
            const db = JSON.parse(data);

            // push obj supplied by the body to our arrayt
            db.push(toDoItem);

            // Write to our JSON file
            fs.writeFile(`./helpers/db.json`, JSON.stringify(db), err => console.log(err));
            /* 
                - Requires
                    - route to original file (same pathway as readFile)
                    - what needs to be included or written
                        - We are making out array BACK into a JSON format and stringify-ing it. It requires whatever data we desire.
                    - Callback function to handle errors
            */

            res.status(200).json({
                status: "New Item Created",
                toDoItem,
            })
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// TODO: ////////////////////////////////////////////////////////////////////////
// TODO: Updated (PUT)
// TODO: ////////////////////////////////////////////////////////////////////////
/* 
    - pass ID value as a param, /:id (id will become parameter name used inside logic)
    - iterate through options (look thru the db contents, comes back as an array)
    - check if id matches param ( if else or other conditional check)
    - reassign the db at the index to what come from body. (take the request body and edit the "incorrect" object we want to change)
    - save file (using the fs.writefile to update and save the whole json file)

    * stretch goal: update just the data without modifying the ID

    [x] start the route and add the param string
    [x] build skeleton try/catch
    [x] try is success response, grab param
    [x] create logic that uses an array method to find and match the param to db item
    [x] first I need fs to read the file w/ .readFile (ya gotta read the file before you can do anything to the contents)
    
*/

router.put("/:id", (req, res) => {
    try {
        // const {id} = req.params; //! good for testing
        // console.log(id);
        // console.log(typeof id);

        const id = Number(req.params.id);
        //! Number() makes it a number EZ
        // console.log(id);
        // console.log(typeof id);

        // The new values coming in with/via the request
        const todo = req.body

        fs.readFile("./helpers/db.json", (err,data) => {
            // All the logic I want to build after fs reads the JSON file
            if (err) throw err;

            const db = JSON.parse(data); // makes usable object / transforming normal json quotes to normal and parses it into a plain array w/normal JS objects
            
            // declare a result variable to assign to later
            let result; //! revisit

            // Using the forEach() method to find and replace the item that matches the param id
            db.forEach((e, i) => { // e=each item, i=index
                console.log( e, i );
                if(e.id === id) { // grabs it
                    // in the if: when match is found we want to be able to replace/overwrite to new value
                    // assign the object to todo(req.body): grabbing the item at its array index and reassigning its value to what we passed in via the req.body(todo var)
                    db[i] = todo; // reassign the todo var
                    
                    result = todo; //re-assign result var 
                    
                    fs.writeFile(`./helpers/db.json`, JSON.stringify(db), err => console.log(err));
                }
            });
            // If the items id match the param, we do something
            //? whatever we are testing: (this runs if true):(this runs if false)
            result ? res.status(200).json({
                status:`ID: ${id} was successfully updated`,
                object: result
            }) : res.status(404).json({ status: `ID: ${id} not found`});
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});


// TODO: ////////////////////////////////////////////////////////////////////////
// TODO DELETE
// TODO: ////////////////////////////////////////////////////////////////////////
/* 
    - pass ID as a param / numberify it
    - read file / fs.readfile
    - filter to match the param value
        - return what doesn't match
    - write to file, fs.writefile()
*/

router.delete("/:id", (req, res) => {
    try {
        const id = Number(req.params.id); // grabbing the parameter
        // no need for body
        fs.readFile("./helpers/db.json", (err,data) => {
            if (err) throw err;

            const db = JSON.parse(data); // transforms normal JSON weird quote format to plain array w/normal js objects

            // declare variable that holds and does all the sorting/filtering object

            const filterDB = db.filter((e) => {
                // check for id and return only what does not match
                if (e.id != id) {
                    return e;
                } 
            });

            fs.writeFile("./helpers/db.json", JSON.stringify(filterDB), (err) => console.log(err));
                res.status(200).json({
                    status: `ID: ${id} was successfully deleted.`
                });
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});




module.exports = router;
const router = require("express").Router();
const db = require("../helpers/db.json");
const fs = require("fs");
const fsPath = "./helpers/db.json";
// const bodyParser = require('body-parser')
// router.use(bodyParser.json()) 

// GET all
// http://localhost:4001/characters
router.get("/", (req, res) => {
    try {
        res.status(200).json({
            results: db
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});
// GET one by id - read
// http://localhost:4001/characters/1
router.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        let character = db.filter(obj => obj.id == id);
        res.status(200).json({
            status: `Found character at id ${id}`, 
            character,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// GET all by class - read
// http://localhost:4001/characters/class/Jester
router.get("/class/:class", (req, res) => {
    try {
        const characterClass = req.params.class; // we use class to reference the /class above
        let characterResults = db.filter(obj => obj.classType.toLowerCase() == characterClass.toLowerCase()); 
        if (characterResults === 0) {
            res.status(401).json({
                message: `There are no ${characterClass}s`
            });
        }
        res.status(200).json({
            characters: characterResults,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// POST one - create
// http://localhost:4001/characters/create
router.post("/create", (req, res) => {
    try {
        // Object Destructuring to help individually grab the keys & values (properties) of our character object coming from req.body
        let { name, classType, age, race, npc } = req.body;
        // use math to create new id for character
        let newId = db.length + 1; // looks at the length of the array and adds 1
        console.log(req.body);
        const newCharacter = {
            id: newId,
            name,
            classType,
            age, 
            race,
            npc,
            level: 1,
        };
        fs.readFile(fsPath, (err, data) => {
            if (err) throw err;
            const database = JSON.parse(data);
            // This makes sure we don't repeat ids
            // console.log('ID values: ', database.filter(d => {
            //     if(d) {
            //         return d.id;
            //     }
            // }));

            let currentIDs = [];

            database.forEach((obj) => {
                currentIDs.push(obj.id);
            });
            if (currentIDs.includes(newId)) {
                let maxValue = Math.max(...currentIDs); // Finds the highest 
                newId = maxValue + 1;
                newCharacter.id = newId;
            }

            database.push(newCharacter);

            fs.writeFile(fsPath, JSON.stringify(database), (err) => console.log(err));

            res.status(200).json({
                status: `Created new character ${newCharacter.name}!`,
                newCharacter,
            });
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});

// PUT one by id - update
//http://localhost:4001/characters/1
router.put("/:id", (res, req) => {
    try {
        const id = Number(req.params.id);

        const updatedInfo = req.body;

        fs.readFile(fsPath, (err, data) => {
            if (err) throw eww;
            const database = JSON.parse(data);

            let character;

            database.forEach((obj, i) => {
                if (obj.id === id) {
                    let buildObj = {};
                    for (key in obj) {

                        if (updatedInfo[key]) {
                            console.log('Checked')
                            buildObj[key] = updatedInfo[key];
                        } else {
                            buildObj[key] = obj[key];
                        }

                    }

                    database[i] = buildObj;
                    character = buildObj;
                }
            });
            // Error if the id isn't in the DB 
            if (Object.keys(character).length <= 0) res.status(404).json({ message: "No character in roster" });

            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err));

            res.status(200).json({
                status: `Modified character at id: ${id}`,
                character: character
            })

        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});


// DELETE one by id - 
router.delete("/:id", (req, res) => {
    try {
        const id = Number(req.params.id); 
        fs.readFile(fsPath, (err,data) => {
            if (err) throw err;

            const db = JSON.parse(data);

            const filterDB = db.filter(i => i.id !== id);
            fs.writeFile(fsPath, JSON.stringify(filterDB), err => console.log(err));
            res.status(200).json({
                status: `Character at ${id} was successfully deleted.`
            });
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});




module.exports = router;
const router = require("express").Router();
const db = require("../helpers/db.json");
const fs = require("fs");

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
        let characterResults = db.filter(obj => obj.class.toLowerCase() == characterClass.toLowerCase()); 
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
router.post("/", (req, res) => {
    try {
        const createNewChar = req.body;
        fs.readFile("./helper/db.json", (err,data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            db.push(createNewChar);
            fs/fs.writeFile(`./helper/db.json`, JSON.stringify(db), err => console.log(err));
            res.status(200).json({
                status: "New character created",
                createNewChar,
            })
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
});
// PUT one by id - update

// DELETE one by id - 
router.delete("/:id", (req, res) => {
    try {
        const id = Number(req.params.id); 
        fs.readFile("./helpers/db.json", (err,data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            const filterDB = db.filter((e) => {
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
// Require in and use the .env
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const clog = console.log;
app.use(express.json());

// Controllers
const character = require("./controller/character.controller")

// Middleware
app.use(express.json());

// Routes
app.use("/characters", character);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
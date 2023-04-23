const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    genre: {
        type: String, 
        require: false,
    },
    rating: {
        type: String, 
        require: true,
    },
    length: {
        type: Number, 
        required: true,
    },
    releaseYear: {
        type: Number,
        require: false,
    },
    // added property to store the users id of who made the movie obj/doc
    owner_id: {
        type: String,
    }
});

module.exports = mongoose.model("Movie", MovieSchema);

/* 
Challenge
    [x] Create a Schema called MovieSchema
        Properties within:
        [x] "title": string, required
        [x] "genre": string
        [x] "rating": string, required
        [x] "length": number, required
        [x] "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
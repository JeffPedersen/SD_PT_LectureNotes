const router = require("express").Router();
const Movie = require("../models/movies.model");

// Way to use validate session directly in the controller and endpoints. use "../"
const validateSession = require("../middleware/validate-session")

// Error Response Function
//! Very handy for recalling errors
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    );
}

//TODO POST
// http://localhost:4000/movies/
router.post('/', validateSession, async (req,res) => {
    try {
        
        //1. Pull data from client (body)
        const { title, genre, rating, length, releaseYear } = req.body;
        //2. Create a new object using the Model
        const movie = new Movie({
            title,
            genre,
            rating,
            length,
            releaseYear,
            owner_id: req.user._id
        });
        
        //3. Use mongoose method to save to MongoDB
        const newMovie = await movie.save();

        //4. client response
        res.status(200).json({
            movie,
            message: "New movie added success",
            
        });
    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO GET One
// Movie.findOne()
// http://localhost:4000/movies/id
router.get("/:id", async (req, res) => {
    try {
        // grab params from url
        const { id } = req.params;
        
        // find the document(movie JSON obj) within the DB collection
        const getMovie = await Movie.findOne({_id: id});

        // Response message: use ternary to make fancy response
        getMovie ?
        res.status(200).json({
            msg: `${getMovie.title} found`,
            getMovie
        })
        :res.status(404).json({
            message: "no mov"
        });
    } catch (err) {
        errorResponse(res, err);
    }
});
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

//TODO Get All
// http://localhost:4000/movies/
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", validateSession, async (req, res) => {
    try {
    
        // this endpoint will only return all movied in db, no req or params needed
        const getAllMovies = await Movie.find();

        getAllMovies ?
            res.status(200).json({
                getAllMovies
            }) :
            res.status(404).json({
                message: `No movies found.`
            });

        } catch (err) {
    errorResponse(res, err);
    }
});

//TODO Get All by Genre
// Movie.find()
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
    try {
        // Grab genre value from param
        const { genre } = req.params;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {
                i === 0 ?
                    buildWord = genre[i].toUpperCase():
                    buildWord += genre[i].toLowerCase();
            }
        }

        // Finding all movies in db who's genre matches the params({db genre key : req.params.genre})
        const getMovies = await Movie.find({genre: genre})

        getMovies.length > 0 ? 
            res.status(200).json({
                getMovies
            }) :
            res.status(404).json({
                message: `No movies found.`
            });
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO PATCH One
// http://localhost:4000/movies/643c62b4c75034713c171406
//! adding validate session to make that the movie also belong to the logged in user
router.patch('/:id', validateSession, async (req, res) => {
    try {
        //1. Pull value from parameter
        // const { id } = req.params;
        // Create a filter to create both ids from req.params and owner_id against id from token
        const filter = {_id: req.params.id, owner_id: req.user._id};
        //2. Pull data from the body.
        const info = req.body;

        //3. Use method .findOneAndUpdate to locate document based off ID and pass in new information.
        const returnOption = { new:true };
        
        const updatedMovie = await Movie.findOneAndUpdate(
            filter,
            info,
            returnOption
        );
        
        //4. Respond to client.
        res.status(200).json({update,
            message: "Updated, yo"});
            updatedMovie;
    } catch (err) {
        errorResponse(res, err);
    }
});


//TODO Delete One
//http://localhost:4000/movies/643f3bcfc20243745d7636f8
router.delete('/:id', validateSession, async (req,res) => {
    try {
        //1a. Capture ID
        const { id } = req.params;

        //1b. locate movie info by ID prior to deletion
        const titleMovie = await Movie.findOne({_id: id, owner_id: req.user._id});

        //1c. save the movie's title
        const title = titleMovie.title;

        //2. use delete method to locate and remove based off ID
        const deleteMovie = await Movie.deleteOne({_id: id, owner_id: req.user._id});

        //3. Respond to Client
        deleteMovie.deletedCount === 1 ?
            res.status(200).json({
                msg: `${title} was successfully deleted!`})
            : res.status(404).json({
                msg: "No movie found."
            });
    } catch (err) {
        errorResponse(res, err);
    }
});


module.exports = router;


/* 
  Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
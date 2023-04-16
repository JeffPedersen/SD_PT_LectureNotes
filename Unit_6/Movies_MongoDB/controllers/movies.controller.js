const router = require("express").Router();
const Movie = require("../models/movies.model");

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
router.post('/', async (req,res) => {
    try {
        
        //1. Pull data from client (body)
        const { title, genre, rating, length, releaseYear } = req.body;
        //2. Create a new object using the Model
        const movie = new Movie({
            title: title,
            genre: genre,
            rating: rating,
            length: length,
            releaseYear: releaseYear
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

router.get("/", async (req, res) => {
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
 //! next class
//TODO Delete One
//! next class

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
// Require mongoose
const mongoose = require("mongoose");

/* 
    Models are a structure to how we want our objects within our database to look.
        - This is our schema! 
        - Are referenced whenever we are handling data between the client-side and database.
*/

const UserSchema = new mongoose.Schema({
    /* Below creates columns for our document:
        - columns would be key/value pairs of our obj we wish to store
        - 
    */
    firstName: {
        type: String, // what datatype this is expecting
        required: true, // default is false
    },
    lastName: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        require: true,
        uniqued: true, // duplicate keys will throw error
    },
    password: {
        type: String, 
        required: true,
    }
});

/* 
    Although we won't see this until we establish a connection route, Databases typically add a plural suffix to our schemas. 
    - User = Users from our export
*/

// export the model

module.exports = mongoose.model("User", UserSchema);
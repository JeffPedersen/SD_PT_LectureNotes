# Traditional Databases

Database:
- Collection of data stores in tables or documents 
- Sorts Data by creating a **primary key (id)** for each record 
    - Records: data within rows of the table

### Two Main Types of Databases:
Relational:

    - Similar to table structure 
        - Excel or sheets
    - Strict structure
    - Tables can be linked via keys
    - ex: SQL, PostgreSql, MySql

Non-Relational:

    - Has 5 Types of Structure: 
        - document data store
        - column-oriented database
        - key-value store
        - document store
        - graph database
    - Flexible structure 
    - Uses primary key (id) to give individuality to each document 
    - Data is stores as documents containing JSON object
    - ex: MongoDB, Apache cassandra, Couchbase

<br><br>

# MongoDB
- Is a **Document Data Store**
- This is the database system i'll be using

| Mongo Terms                     | Relational Equivalent |
| ------------------------------- | --------------------- |
| Database                        | Database              |
| Collections                     | Tables                |
| Documents (stores data as JSON) | Records (Row of data) |

<br>

## MongoDBCompass
- A gui for mongoDB
- How to create a new collection:

  1. Open MongoDBCompass.
  2. Click "New connection +" button (on your first use, a New Connection form will already be open.)
  3. Click the "Connect" button (usually is green).
  4. This will take you to a new view where we can create or view databases:

  - Click on the **"+"** button next to the "Databases" label.

  5. Add a name for the Database and the Collection, then press the green "Create Database" button.
  6. You should now be able to see your new DB in the left sidebar.

- How to create a new document(record of data) using Compass:

  7.  Click the "ADD DATA" dropdown and select "Insert document".
  8.  Add some JSON and click "Insert".

- Notice our new document has been added to the DB
- An ID has been automatically created for it. (It's a randomized key so that this document could be referenced individually.)
- We can create our records in this fashion, or upload a file to quickly populate a collection.

<br>

# MERN Stack

- M: Mongo, our database
- E: Express, our server
- R: React, our frontend
- N: Node, everything in between


<br>

# SECURITY
Encryption: 
- Plain text passwords stored within a database is highly insecure.
- Encryption helps us provide protection to both users and databases    

## Bcrypt
- `npm i bcrypt`
- dependency that handles encryption of data.
  - most commonly - passwords
- Uses hashing and salting to hide the password value so its nearly impossible to decrypt 

Hashing:

- Hashing produces a one-way randomized string based off the plain text string provided.
  - Uses a hashing algorithm to change plain text into a set of various characters.
  - Uses `salting` as an extra layer of encryption.


Salting:

- Process of including a randomized string included within the hashing prior to being set to the database.
- This makes it unpredictable as to what the hashed value becomes.
- With bcrypt we can determine how many iterations the hashed value should be salted.
  - Currently - 10 to 13 iterations are common for security.

example code:

```js
bcrypt.hashSync("abc123", 10);
```

- first param = password
- second param = number of times the password will be salted.

<br>

## JWT

- JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user.
- Is a token that is considered to allow access during a specific amount of time.


example code:

```js
const token = jwt.sign({ id: user._id }, "secret message", {
  expiresIn: 60 * 60 * 24,
});
```

`sign(payload, message, options)`

3 arguments:

- payload
  - In the sample we are using an object that details the id of the user. Typically details of the user to verify it's them.
- encrypt/decrypt message
  - Passed in as a string in the sample
  - Typically stored as a `.env` variable.
- Options sets (expiration details)
  - represents/details seconds or a strings describing a time span for the token to be valid/when to expire
    - ex: `"2 days"` or `"10h"`

    <br>

# CRUD Methods w/ MongoDB

Just as we had endpoints that allowed us to preform CRUD methods on data going to our JSON file, we will be building the same routes **but** to affect data stored in the DB.

Mongoose and MongoDB provides us with methods ( .example() ) to make affecting data in the database possible and simple:

### .save()

- Allows us to take our model's new instance and store it in the database
- Most often used with our POST endpoint to create a data document in the DB.
- Saves the document(the object we just constructed with req.body) by inserting a new document into the database.
- [Mongoose Docs: .save()](https://mongoosejs.com/docs/api/document.html#document_Document-save)

### .findOne()

- Method used on a collection, ex: Movie.findOne()
- Used most often with GET endpoints for getting one item.
- Returns one document the satisfies the specified query criteria from the collection.
- It has 3 optional parameters, with the first being `query` which specifies how/what filtering to use for selection.
- When called with no parameters, it will return a single document from the collection.
- [MongoDB Docs: .findOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/)

### .find()

- Method used on a collection, ex: Movie.find()
- Used most often with GET endpoints for get all or get by type.
- Returns a cursor (a pointer to the result/documents so we can retrieve the documents) to the selected documents in a collection.
- Has 3 optional parameters, with the first being `query` which specifies how/what filtering to use for selection.
- When called with no parameters, returns all documents from a collection.
- [MongoDB Docs: .find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)
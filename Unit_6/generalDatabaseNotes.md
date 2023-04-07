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
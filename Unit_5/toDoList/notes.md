# Getting Started
- create a `package.json` 
  - In terminal: cli command: `npm init -y`
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.

- node_modules folder
  - Provides us access to any "behind the scenes" code that helps run express and any dependencies.
  - If anything gets deleted or you're cloning down a project, use `npm install` to get those files back/installed.

- package-lock.json
  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.

- Create a root JS file
  - `app.js` or `index.js`

- Use the command `nodemon` to start the server
  - nodemon is a way for our server to continue to run while we are making changes
  - npm install nodemon --save-dev
  - To stop the server ctrl+c

### Controllers
Our controllers help us set routes for various endpoints. Depending on how we build the path will determine how it responds. 

  CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT/ PATCH
- Delete: DELETE

We are going to set up a controller folder and make our first controller file called practice.controller.js

Sending a status code with a response is good manners for both the user and dev

### Creating a collection in postman
Collection button is at the top right of the left sidebar

After clicking collections we can create a new collection with the "+", our collection is like a folder for our API requests. We can rename/etc. by right clicking the three dots on the collection name
- We can right click the collection name to add request
- we can then name the request and save it for reference later
- Cmd + S or floppy disk will save the request to the collection

### Setting the method in Postman

To set methods in Postman
  - In the top left of the request, the dropdown in front of the url needs to change to the method
  - GET / POST / PUT / DELETE
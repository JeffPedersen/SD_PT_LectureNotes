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

## Postman
- Set Methods w/dropdown to the left of url bar
  - GET / POST / PUT / DELETE depending on route
  - Body, tab label under the url
    - raw (select the raw value radio button)
    - JSON (blue dropdown to the right of the radio)
    - Make a JSON object (in the body area)w

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.

## MVC
- Stands for Model View Controller
- Architecture pattern (structure in which they are coded) that helps our Separation of Concerns
- Model: Database schematic, the blueprint for our data (we dictate what created data looks like/it's data)
- View: browser, Postman, etc. (what the users see)
  - Application that interface with the server.
- Controller: Part of the server application which handles logic. (How we build our logic within the server, we code and create what routes can be used and what they do.)

----

## Middleware 
- A function that accesses the request and response
- Has a call stack
  - request
  - response
  - next 


----

## CORS
- Cross Origin Resource Sharing
  - A preflight action
    - Checks to see what options are available for any type of requests prior to our route being triggered
    - ( checks to see if your request is available )
    - If the headers do not match in our request: it can throw an error
    - Adding this dependency to our project can help resolve any of those issues
    - ( this can help our application handle any potential errors throughout our build process )
  - Dependency
      - stop server and install as a dependency
      - ```npm i cors```
      - import within ```app.js``` above ```routes```.
  - app.use(cors());
  - In Postman get request its under headers (Access-Control-Allow-Origin) and value
  - https://www.npmjs.com/package/cors




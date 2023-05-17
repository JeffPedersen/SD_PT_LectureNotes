# Creating A Client Side Application

We're here to become full-stack developers. 
The full-stack we will be familiar with and build together is the MERN stack.

> <br>
>
> - M, MongoDB, our database
> - E, Express, our Node.js server framework
> - R, **React**, our client side application
> - N, Node.js, our back-end JS runtime environment (Node.js and Express together are the server)
> 
> <br>

Regardless of what languages and technologies we choose to use for our front-end client side application, there are some planning steps and successful habits to build when creating an app for our users.

The contents of this file will have ideas, habits, and guidelines for creating a client side application in as smooth a process for you and your dev team as possible. As well as details on using _React_ in particular, useful/needed React hooks, and helpful tips when using React for your client.

<br>

# Where to Start?

**Project planning is critical to application development and developer morale/expectations (for yourself and your team).**

**Wireframes and to do lists** can help us and our team share a common idea a goal as well as delegate in an efficient and comfortable way.

> <br>
> 
> **This will make the developing process easy to handle if we take it _one to do item at a time_.**
>
> <br>

<br>

## **Wireframes**
_"A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website."_ - Wikipedia

Wireframes are important! It's the first step in thinking about what elements/components will be needed and used in connection with your endpoints and how the endpoints function. 
- i.e. a get call route displays stuff, we should make a container to hold all the content and a card or div to hold each entry piece 
- _or_ we need to sign up a new user with our user post endpoint, a form could create a space for the user to enter the needed information and we can then send and submit that to the server and thus DB.

Wireframes allow us to have a visual map of what elements we need, which we can use to build a to do list of goals off us, which we can then divide and conquer! 

<br>

### **Process Steps To build a Wireframe (that I recommend):**
1. List out your endpoints and their CRUD functionality. 
2. List next to those endpoints what elements/components would be good options to display/process/house the endpoint contents or the endpoint actions.
3. Think of and then roughly sketch/plan the overall flow of the website and website views.
    - Ex: Would a user first see the sign up page? Or a home page discussing/touting the site contents? Etc.
4. Once the overall layout/views is agreed upon, either:
    - A) Have the team divide up what components are what team member's responsibility and each member can then decide the component element details 
    _or_
    - B) Build out an even more detailed wireframe of the major/each component together.
5. Your wireframe should now be an awesome reference and  jumping off point to use to create a to do list for(as well as to refer to while you build your app):
    - What elements you use to create the JSX component. (Is it a cardDeck and I need a parent deck and a child that creates each card? Do I want a title for this section? Etc.) 
    - What logic you'll need to build. (Will I need a React Hook or just a function to make the component do what I want it to? Do I need to use State? Get props? Pass props? Etc.)
    - What styling you may need. (Did we have this on the left or right side? Or centered? Does this card layout idea have certain spacing? Etc.)

### Wireframe Resources:
- [The Definitive Guide: How To Make Your First Wireframe](https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/)
- [What Are Wireframes](https://balsamiq.com/learn/articles/what-are-wireframes/)

### Wireframe Tools (all have free versions/are free):
1. Paper and Pencil (analog)
2. [Figma](https://www.figma.com/design/)
3. [Excalidraw](https://excalidraw.com/)
4. [Miro](https://miro.com/app/)
5. [Mockplus](https://www.mockplus.com/mockplus-rp)
6. [Adobe XD](https://helpx.adobe.com/download-install/using/download-creative-cloud-apps.html)
7. Paint or any drawing app that's already on your computer.

<br>

## **To Do Lists**

Creating a to do list for yourself and with your team can help divide project responsibilities and establish accountability.

Once general component responsibilities have been divvied up, make yourself a do to list for one component at a time _or_ each component and choose which to tackle first.

### An _example_ of an auth login form to do list:
1. Create component folders and file.
2. RFC in base component structure.
3. Import into parent component.
4. Run app with `npm start` to check if working as expected.
5. Make and style the login title h2 element.
6. Find form component from Reactstrap that best fits proj needs.
7. Change form input elements, two text inputs (one of type password) and a submit button.
8. Create handleChange and handleSubmit/useEffect functions. (console.log test as building)
9. Connect form tag and input tags to correct functions.
10. Test each with console logs.
11. Route and send to server.
12. Check DB for confirmation. (& debug as needed)
13. Make sure view/app flow is happening if view needs to change after working as expected.

There are digital and analog ways to keep your to do lists! 

Make sure to tackle and time box your list accordingly to prevent overwhelm. 

It's a tool to help you focus, not meant to fill you with dread at the list of items. Creating sub-lists for each day/the time block you intend to code in can help you stay motivated and feel like you're truly progressing. 

<br>

# Client Side In Class Demo: Movie Client

Run the command needed to create your React app, remove the boiler plate code, and let's work through the components together! 

The best way to work through building out a client side is to:

**Take it one component at a time!**

We will be working through the Movie Client together which will be similar to a solo dev workflow.

The order that we will be constructing this front end:
1. Auth: Sign Up and Login
2. Routes: How we create routing in React
3. Movie Index & Movie Create
4. Movie Table & Display, Delete Functionality
5. Movie Edit

> <br>
>
> ### **When working with a full stack project:**
> 
> To connect the back end to the front end **you must start your server first** and then **start your client**.
>
> Server: Open terminal to root of server app and run: `nodemon`
> 
> Client: Open terminal to root of client app and run: `npm start`
> 
> <br>

### **Traditional Full-Stack Project Folder Set Up:**
A full-stack project is made or generally housed in a primary folder of the project name with the client and server as folders within.

- MovieApp / Project Name
    - MovieServer / Server App Name
    - movie-client  / Client React App Name

<br>

# Auth: Sign Up & Login Components

The Auth component will house/govern our Login and Signup.
- We separate Login and Signup simply so that we have an easy way to fix any issues or update singular aspects of our page.
- I.e. If our Signup has issues, or our Login needs to incorporate something new, we can simply go to those individual components to make those changes.

Parent component: `Auth.jsx`
- ^ Gets imported into App.jsx

Children of Auth.jsx: `Signup.jsx` & `Login.jsx`
- ^ Gets imported into Auth.jsx

## **Steps to Build Out Auth Components:**

_Auth_, `Auth.jsx`

1. Create the needed folders and component files.
2. RFC for Auth.jsx and import Auth into App.jsx.

_Signup_, `Signup.jsx`

3. RFC for Signup.jsx and import Signup into Auth.jsx.
4. Find and use(**import**) Reactstrap components to create a form in Signup that will accept:
    - firstName
    - lastName
    - email
    - password
5. Get the Signup elements and parent Auth element configured with the library properties you want. (i.e. color, size, etc.)
6. Build out handleSubmit functionality for the form.
7. Use console.logs to check if working as expected.
8. Build out and use useRef hook functionality to reference each input.
9. Build out how to send the data to the server:
    - Build out the object to send to the server.
    - JSON.stringify() object so the server can read and accept it.
    - Set up variables to hold the url and headers that the request to the server requires.
    - Build a try/catch block to try to fetch to the server! (P.S. don't forget that it needs to be an async function.)

_Login_, `Login.jsx`

10. RFC for Login.jsx and import Login into Auth.jsx.
11. Find and use(**import**) Reactstrap components to create a form in Login that will accept:
    - email
    - password
12. Get the Login elements and parent Auth element configured with the library properties you want. (i.e. color, size, etc.)
13. **Repeat steps #6-9 from above.**

<br>

## Using our Token
So we've built out both our forms and are successfully obtaining our user object, something to note is the response we had built.

**We have access to our message, token, and user object.**

This means that we can grab that data and set it.
- The purpose of our token is to provide us access to rest of our routes depending on if they are logged in.

> <br>
> 
> We want the entire React app to be able to have access to and know of the token information.
> 
> **That means the best place to store and house the token is with useState in the App.jsx component.**
>
> App.jsx is the highest order parent JSX component and can pass the token then to all other children.  
> 
> <br>

We can use state to hold our token value and props to pass down our setState function.
- We'll need to set props to pass through Auth.jsx and into its child components.

### **Steps to Build Out Token Access:**
1. Create token useState in `App.jsx`.
2. Pass token props from `App.jsx` to Auth component.
3. In `Auth.jsx` pass updateToken props to Login component.
4. In `Login.jsx` use updateToken props function set the app's sessionToken to data.token in the try block of the handleSubmit.
5. Go back to `Auth.jsx` pass updateToken props to Signup component.
6. In `Signup.jsx` also use updateToken props function set the app's sessionToken to data.token in the try block of the handleSubmit.

### Setting Token to Local Storage
Placing our token within the browsers local storage can help us determine if a user has access.

It will act as our quick check as different routes are utilized.

**Steps to Add Token to Local Storage:**
1. Go to the `App.jsx` file, this is where we will build the ability to set the token to local storage.
2. We will create a updateToken function that will let us set the token to local storage and call the state setSessionToken.
    - We are targeting the Storage Object within the browser.
3. Update the props passed to Auth so the updateToken function runs in place of just setSessionToken.
    - We then update our props to use our function instead of the setState function so that we can process our setItem() method THEN setState.
```jsx
    const updateToken = newToken => {
    localStorage.setItem("token", newToken); 
    // ^ .setItem(key, value)
    setSessionToken(newToken);
  }
```

We can then locate our session token within the Application section of our tools and see it under our Storage objects!

<hr>

<br> 

# React Router DOM

`react-router-dom` is an npm package we need to install.
- We need to first stop the terminal from running.
- To install the package run the command: `npm i react-router-dom` 
- Start the client back up with `npm start`

### What is Routing? 
After logging in, we need to see the page the user came to view(i.e. the movies view versus the login view).

We do that with **Client-side routing**:
- This means the routing and changing the view happens in the React app.
- It allows for faster display of our pages because it doesn't go through the server to return any HTML or CSS.

### Where we import 
Though the package is installed, we need to call on the router and import it into the right file: `index.js`
- This wraps our App component so that everything within it has access to it.

```jsx
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {BrowserRouter} from 'react-router-dom'; 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
    );
```

BrowserRouter:
- This stores our browsers current location using clean URLs.
- Navigates using the browsers built-in history stack.
- [Browser Router Example](https://reactrouter.com/en/main/router-components/browser-router)

### Refactoring the App for Working Routes
There are two main tags that we will import from react-router-dom and use in `App.jsx` to truly make our application behave and route like the websites we're used to.

Route**s**
- Matches a set of child Routes from its current location.
- `<Routes></Routes>`
- [Routes Docs](https://reactrouter.com/en/main/components/routes)

**Route**
- One of the most important parts of this dependency.
- Allows for data loading and mutations to be simplified through route nesting.
- We establish the path required in order to view an element.
    - path="/endpoint"
    - element={Component/JSX}
- `<Route path="/" element={<Auth updateToken={updateToken} />} />`
- [Route Docs](https://reactrouter.com/en/main/route/route)

**How to move/reroute post login:**

**useNavigate:**
- [Navigate and useNavigate](https://reactrouter.com/en/main/components/navigate)

- Method pulled from React-Router-DOM
    - Need to be imported where used.
- Changes the current location when it is rendered.
- Simply helps us move from one endpoint to another as we desire.
  - Must pass in the path as an argument
ex:
```jsx
navigate('/sample-endpoint');
```

navigate:
- A simple variable to help us easily call said method.
- In our If block with the `data.message === "Successful!"` is what happens next if all goes well and its a success. In this we want to keep:
    - The message we wrote for the Login response in the user.controller.js file.
    - Still using the updateToken() function to handle our token state.
    - **_BUT ALSO ADD_** navigate('/movie'), which will call on our render to route us to our desired endpoint.


<br>

# Movie Components

We will create the components need to satisfy all the of the CRUD capabilities that our server allows us or the user to perform.

Movie component folder/file structure:
- components 
    - movie
        - `MovieCreate.jsx`
        - `MovieEdit.jsx`
        - `MovieIndex.jsx`
        - `MovieTable.jsx`

Component construction order:
1. Movie Index, `MovieIndex.jsx` (The parent/top level movie component).
- MovieIndex will be our main point of entry for our movie routes
- We're going to be utilizing some of reactstrap components to help frame our page out.
- [Part 2 of Movie Index] We will also be eventually building out GET Movies fetch logic in this file, later when we start working on the movie table. As well as state to house movies, setMovies. (That way table and edit and other components could also have access to all the movies called from the server/db.)

2. Movie Create, `MovieCreate.jsx`
- We want a form so that users can add movies to the database.
- Still adding in our reactstrap components, we'll need to think about what input fields we want.
- We know what we need all based off our model from our server:
    - **Title**, dataType: string, input: textfield/text type input
    - **Genre**, dataType: string, input: dropdown (we control what options the user can choose from)
    - **Rating**, dataType: string, input: dropdown? radio buttons?
    - **Length**, dataType: number, input: input type number
    - **Release Year**, dataType: number, input: dropdown?
- Knowing that we will have a form, we'll also need a handleSubmit to process our data.
- Use useRef() to connect to all form inputs.
- Create an .env URL for fetching to the server.
- Build out the handleSubmit functionality to send data to the server.

3. Movie Table, `MovieTable.jsx`
- We need a place to display all of our movies, thus we need to build a spot for them to be on the front end.
- We're going to display all of our current records within our database, we will use Reactstrap components to help stylize our display.
- Build out GET Movies fetch in `MovieIndex.jsx` and state to house data.
- Build table component to handle displaying the movie data. (After creating the table headers) We will create one `<tr>` that we can map over our props.movies array and display the movie data as needed! 
- Next, we will update our `MovieCreate.jsx` fetch success try block to fetch movies(props.fetchMovies()) every time we add a new one! That way the display table will always accurately display what's in the database.
- **DELETE** Movie functionality:
    - We can POST and GET on our application, but it's time to be able to delete a movie.
    - Since the table displays all the movies, this is a great place to build out that functionality.
    - First we will build out an async function called deleteMovie that will receive the movie id in `MovieTable.jsx` above the return.l
    - We will add a table header and table row to our table to allow us the ability to trigger our edit or delete with a button.

4. Movie Edit, `MovieEdit.jsx`
- We need a way to be able to edit a movie of our choice. We will trigger the event/process with a button within our table **_BUT_** will need a separate component to handle housing a new form to change/edit the existing movie data.
- Add the new component to App as a new Route.
    - The path should be "/movie/update/:id"
    - This will need to pass in the sessionToken as a prop.
- We will use **useParams()**
    - Method pulled from React-Router-DOM (Need to be imported where used.)
    - Considers the `path` provided within the `<Route>` in `App.jsx`.
    - Recognizes the `:id` as a parameter value in which to respond.
    - We are able to access the key of `id` much in the same way we did with the server.
- We can make a base h1 and container for the base return. 
- Time to build out the form! We can use the same form layout style from out create movie component since it will use the same input types to process the data.
- Start the handleSubmit, we're **not** going to use useRef in this as we will establish our input fields with useState instead. 
- Import useState within the component, create state for each of our movie data values/inputs.
- Next, lets build a way to fetch an individual movie (the one we're editing) to ask the server for it's data to **_pre-populate_** the edit form. That way it's much easier to make changes/edits, if the user sees the original values as form placeholders.
    - Make sure the fetchMovies function in it's try block uses all the setState functions to assign all the base values to our data for the inputs.
- Finish up Update endpoint handleSubmit to properly send of the new data to the server.
-  Last but not least, we will create a way to navigate back to the table with a button using the navigate ability. 

<br>

# Sign Out Component
We have a full CRUD application! The only piece of the puzzle left is to create a way to sign out of the site/application.

Remember, this is actually quite important. No one wants to be left logged in after using a public computer or device.

Where we will build the folder/file:
- components
    - auth
        - logout
            - `Logout.jsx`

We need to:
- Reset our sessionToken state.
    - Sounds like we will need to pass our useState function to it.
- Remove it from our localStorage.
    - We'll see a method to help us remove items from our localStorage.
- Navigate to our Auth page.
    - We'll need to import useNavigate from react-router-dom

Also: We'll write up some logic so that we don't see Logout before we should need to.

<br>
<br>
<br>
<br>
<br>

# React Hooks Commonly Used

[Built in React Hooks](https://react.dev/reference/react)

## useRef()

[React useRef Hook](https://www.w3schools.com/react/react_useref.asp)

- Is a React hook.
- The useRef Hook allows you to persist values between renders.
    - I.e. it persists the values of what it's referencing and _does not cause re-renders_ of the page.
- Returns only one item
    - an object called "current"
- Must be imported in from 'react'
```jsx
import { useRef } from 'react'
```
- In React, we can add a ref attribute to an element to access it directly in the DOM.
```jsx
    const firstNameRef = useRef();

    return (
        <>
            <Input
                innerRef={firstNameRef}
                autoComplete={"off"}
                />
        </>
    )
```

**Why we care:** useState can cause rerenders whereas useRef can replace that to target element values without rerendering the component.

<br>

## useEffect()

[React useEffect Hooks W3Schools](https://www.w3schools.com/react/react_useeffect.asp)
[React.dev useEffect](https://react.dev/reference/react/useEffect)
[A Simple Explanation of React.useEffect()](https://dmitripavlutin.com/react-useeffect-explanation/)

- Allows us to perform side effects in functional components.
- Accepts two arguments
  - function
  - dependency
    - optional
    - Can denote a specific event to to trigger

**WHY WE CARE**: This is how we can process fetched data, keep our token from losing it's data/state, directly update the DOM, or create/use a counter.

```js
useEffect(() => {
  // Runs on every render
});

useEffect(() => {
  // Runs only on the first render
}, []);

useEffect(() => {
  // Runs on first render
  // Runs any time any dependency changes
}, [prop/state]);
```

We're going to use this to handle our token during any renders.
- Upon render, we are going to have it check to see if a token exist.
    - If it does, we want it to be within our state.
    - If not, we'll need to obtain it and put it as our state.

> There are times when our application may re-render outside of our control based on what may need to be updated.
> 
> This can cause our state to lose its value. By using useEffect to constantly monitor and persist the token, we can prevent loosing the value and having to make our user login again.

```jsx
useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);
```

**`.getItem()`**
- We pass in the key, (token), that we established when setting the token with the handleSubmit in the Login component.
- This means if there is a token in the local storage, wonderful! Let me take that same token and re-set it again as the sessionToken via the setSessionToken whenever the site may rerender.
# Creating a React App

We will use/run the command(in the terminal):
    ``npx create-react-app your-project-name``
to spin up and create the base React application.

- `npx create-react-app starting-react`
- **npx create-react-app [your-project-name]**

We can also first create and name our project folder and run the following command in the terminal using the folder as the root:
- **`npx create-react-app .`**
This will create a React application within the current folder instead of create a new folder.

> Note: your-project-name is just a filler for the example, you would want to insert whatever name you would like for your project.
> 
> Also... this is a *slightly* older command to start the project. If you check React's docs you will find they suggest that you use Next.js as a template. That is too much for us now, but I encourage you to look into Next.js post the program.
<br>

- In the Terminal, within the project folder(starting-react), run npm start
- Project runs like nodemon . When something is updated, it will render our changes to the page.
- Automatically runs on Port 3000: This should be considered whenever building along with a backend.

## Boilerplate Folders/Files

| Name | Description |
| ----------- | ----------- |
| node_modules | Logic for React & any packages/dependencies, we just ignore these. |
| public | Folder that contains the index.html file, how the app enters and runs in the browser. |
| src | A new folder where we will be building components and mainly working in. |
| .gitignore | Is populated for us. |
| package-lock.json | How our packages know what node_modules code to run / belongs to their functionality. |
| package.json | Just like with the server, this file is the "rubric" or hub for our front-end React application. |
| README.md | React starts a basic README markdown file with some content on React and getting started. Eventually we will learn to build a ReadMe that describes our project's content. |

<br>

## Standard Cleanup of Boilerplate Content
We don't have to necessarily delete any files, but to clean up the unused boilerplate contents to make room for our own is best to do at the start of creating a project.

**Remove the following:**
- In the `Public` folder:
    - _logo files_, we don't need React's logo for our project. 

- In the `src` folder:
    - _App.test.js_ & _setupTest.js_, these handle all of our testing code that we may build. Because we are not going to run testing with this project, we don't need them.
    - _logo.svg_, this is the a svg versioning of the React logo.

    - In the `App.css` file:
    - Clear out the boilerplate code

- In the `README.md` file:
    - Eventually you will want to replace the React content on the ReadMe with information specific to your application.
    - Details of what to do in the project typically are written here.
    - Well written documentation is greatly sought after as this does highlight great communication skills when working through development or making it easy for a user to use your product. (Think of how annoy it was to use bad docs for APIs... we don't want to do that.)


**Update App.js to `App.jsx`**


> Note: Know that this will cause some errors on start, but those will be easy to fix and cleaned up(removing src's to logos that no longer exist, etc.)
<br>

# File Structure & Contents

### ``public`` folder:
- Contains the ``index.html``
- index.html is our entry point to the browser, all handled through the div with the id="root".
- Aka: `index.html`: What is displayed to the browser.
- We hardly ever alter this file(especially with our first base example), other than to sometimes add in a styling library.


<br>

### ``src`` folder:
- This is where we will mainly work and build our components.
- ``index.js`` is how our components filter into the ``index.html`` of the public folder. Normally we only do minor alterations and for a basic app, no changes need to be made.
- Aka: `index.js`: JavaScript being rendered to `index.html`.
- This is doing most of the DOM aspects: we are rendering a React component to the index.html.
- ``App.js`` is where we will be filtering all of our builds through.
- ``App.js``: Main point where components are mounted. This is being rendered within `index.js`.

<br>

### ``App.js`` file:
- **Change App.js to App.jsx**
    - Changing our file format is just helping VS Code denote how to work with autocompletion.
- Naming convention requires PascalCasing for our components.
- All components return JSX.
- This is a Functional Component returning a single item.

<br>

# Creating Components

We will be creating a ``components`` folder **within** the ``src`` folder to hold all our new components.

### Reminder: Functional Components 
- Must be exported.
- Pulls in imports of other components.
- Mounts other components within the *Single Return*.

> Note: ``App.jsx`` comes with boilerplate code we will want to clean up. Become comfortable with removing the contents of ```<div className="App">``` to make room for the base content of *your* application.
>
>(The following components will be for the example pertaining to class, but the concept is the same for any component you may wish to build.)
<br>

### Header.jsx
- Create a ```header``` folder within components
    - Create a file called: ```Header.jsx```
- We have a function named in PascalCasing: standard syntax when building our file structure.
- It is returning a single element: the <header>.
- It is being exported using ``export default Header;``.
    - We then need to import it into a parent component, in this case: ```App.jsx```.
- With the return, we can run any sort of logic that we need (like displaying a variable like the in class example). 
- To run our JS within the JSX, we need to include the { } so that the JSX responds accordingly.
    - This means that we are able to run any sort of JS between these brackets as well.

> Side note: Since version 17 was released, it is no longer required to import React into each component. Does as so: import React from 'react'.
>
> There are cases when we might need to when trying to gain access to other dependencies within React. Overall, it is **not needed** and in tutorials that are older please ignore when they advise you to do that.
<br>

### Footer.jsx
- Create a folder called ```footer``` within the components folder.
    - Create a file called: ```Footer.jsx.```
- Be sure to check for and do you exports and imports.

<br>

### AboutMe.jsx 
- Create a folder called ```aboutMe``` within the components folder.
    - Create a file called: ```AboutMe.jsx.```
- Be sure to check for and do you exports and imports. 

<br>

### Styling 
- We can inject CSS properties inline just like in HTML; however, we must know that we are always writing in JavaScript. This means that our syntax will be a little different.
- React helps us cross the bridge without doing all these connection points.
- Ex:

``` js
<ul style={{textAlign: "left", color: "blue"}}> <ul>
```
- We wrap everything as an object. The style= portion of our element is a part of the JSX being rendered. 
- We wrap our JS within the { } to denote what we intend. However, JS doesn't use dashes to separate properties like CSS does.
    - We use camelCasing to target the property and supply it a string of the value we wish to note.

<br>

- We can also simplify this even more by holding our logic outside of the return and simply targeting it from the JSX.
- This helps keep our styling in order for some components and easy to target later.
    - Note: Projects are all different and styling may be handled in a very different way. This is meant to show how it can be passed through the JSX.

``` js
  let styles = {
        ul: {
            textAlign: "left",
            color: "green"
        },
        p: {
            fontSize: "20pt"
        }
    }
    return(
        <div>
            <p style={styles.p}>{city}, {state}</p>
            <ul style={styles.ul}>
                <li>Grocery Store</li>
                <li>Gas Station</li>
                <li>Out to Eat</li>
            </ul>
        </div>
    )
```



# React

What is React?

- Created by Facebook
- Is a Client Side JavaScript Library
- Helps us build modern, reactive user interfaces for the web.
- Very quick on page rendering.
- Works via using **Components**

Why use it?

- Many companies use or are transitioning their current websites to ReactJS
- Some major companies: Facebook, Netflix, Uber, Dropbox, AirBnB

What we will be focusing on learning:

- React's core syntax & JSX
- Working with components (and all user interactions with the components)
- Working with Data on the front end

> <br>
>
> ### What's a Component again?
>
> A component is a section or item on a page that can be built dynamically or statically.
>
> Usually a reusable element or structure.
> Ex: Think of the Bootstrap <CardDeck > and <Card > elements, those can be reused over and over either statically (pasted 10x's in HTML) or dynamically (using DOM manipulation in JS).
>
> <br>
<br>

## JSX

JSX is JavaScript syntax that returns HTML. - It's basically a way for us to write both JS and HTML in tandem with one another in the same file.

We can inject JS directly into our JSX. - This helps us create a lot of dynamic and flexible aspects within our builds (how the components are mounted/rendered, how to the logic applies to them, it honestly is endless coding power).

### **Rules of JSX**

1. **Must** be exported for it to be used.
2. **Must** be imported for it to be used.
3. **Must** be mounted (mounting means putting elements into the DOM) to be used.
4. **Must** only return **ONE** JSX Element.

<br>

> <br>
>
> ### Quick Side Note: Mounting Vs Rendering
>
> | Mounting                                                           | Rendering                                                             |
> | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
> | Occurs when a component is first added to the page.                | Occurs when a component's state changes.                              |
> | Mounting initializes the component and sets it up for interaction. | Rendering updates the component's view based on changes to its state. |
>
> With React we will be doing a lot of both. React is fast and dynamic because of it's ability to render and rerender individual components versus the entire page when a change happens.
>
> <br>
<br>

# Reusable Components & Props

Our goal (and the awesome powerful flexibility of React) is to create our components to be re-useable and impactful in our front end application.

React allows us to create and use our components to their full potential:
- **Re-usable**
- Passing data or logic with **Props**

The purpose of components is not to break apart all of the sections of our website into these separate files and folders but to possibly build them so that they can be reusable wherever it may be needed.

<br>


> <br>
>
> Concept to keep in mind:
> ## Parent & Child Relationships
> - Currently, everything is filtered through App.jsx into index.js so that it can be rendered to the browser.
> - This means that App.jsx is a Parent component to the Header, AboutMe, and Footer components.
> - The three children are considered siblings and are set along the same hierarchy as to one another.
>
> <br>
<br>

## React Fragments

React fragments can be used to house a single JSX component.
- Reduces the "nodes" within the DOM.
- Common practice is: If it is a <div> without styling, just use a fragment.
    - We do need to import React from the react dependency to utilize it.
    - We can also denote fragments as empty arrow brackets or simply Fragment.
    - ``<Fragment> </Fragment>``
    - ``< > < / >``

    Ex:
``` jsx
function EmployeeInfo() {
    return(
        <>
            <h1>Jack Smith</h1>
            <ul style={{listStyleType: "none", textAlign: "left"}}>
                <li>From: CITY/STATE</li>
                <li>Position: POSITION</li>
                <li>Favorite Food: FOOD</li>
            </ul>
        </>
    )
}
export default EmployeeInfo;
```

<br>

## Props

Stands for properties!
- A set of data that is passed "downward" from parent to child. 
- Cannot be passed to sibling components.

Props are sent through the mounted component from the parent and obtained within the parameters of the child component.
- ``props`` is a naming convention that indicates this process.
- Can be named anything as it is a parameter; however, should be denoted with the ``props`` naming.

Props allow us to access the key/value pairs of properties within the props object.
- This means that we can use this object to inject data into our child component return.

<br>

### Creating Parent Components

When you have a lot of the same component that you want many of, the best case for creating an organized project is making a parent component to house them.
- This will help us control how our information is filtered through.

This can give us the power to use js methods and logic to make many components! 
- We can use arrays and .map() or other early concepts to make some component magic happen.

<br>

> <br>
>
> **Component Keys**
> <br>
> React does need to have some sort of way to navigate each component that is rendered to the client.
> - This helps React understand what to change when a request is happening.
> - Think about it: What if we need to change one component in the middle of the array? This could work if we re-render our components; however, the benefit of React is to "React" to our individual component changes.
> - With our .map(), we have access to not only cycle over our individual objects within the array, but also the index position of that object. Because this is unique to what is being cycled through, we can easily use that.
>
> <br>
<br>

# React Extension
**React Snippets**: This helps us make components quickly with a simple emmet-like command!

dsznajder.es7-react-js-snippets
[docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

Quick Commands
- rfce
    - React Functional Component Export
- rfc
    - React Functional Component (default export)

> Note: Automatically names our component based off the file name (you can change or edit if needed but that's why file names done correctly can make your job easier.)
<br>

# State
**State** helps the program/us modify data based on a condition. It allows us to modify data that changes/needs to be able to change.
- ex: 
    - offline/online status
    - session token storage
- Utilizes React Hooks (useState is a built in React Hook)
    - Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- It requires to be imported:
    - `import { useState } from 'react'`

    > <br>
>
> **Why this matters:**
> - React is a programming paradigm: Programming paradigms are different ways or styles in which a given program or programming language can be organized.
>   - ^That means we have to tell React how to behave/be organized.
> - React is **Declarative**, which means that we can create components and React handles the procedures for us.
> - DOM Manipulation is considered **Imperative**, it is procedural in nature: This means that we have have to go through specific procedures in order to change anything (select elements, provide values, append, etc). 
>
> State via useState() allows us to bridge that gap.
>
> <br>

A true example of what we will see and use:
```jsx
    // An example with a string as the starting data type
    const [ names, setName ] = useState("Frodo");
    
    // An example with an int as the starting data type
    const [ count, setCount ] = useState(0);
```

## Changing State
What if we want to update our information that is being held in our state?
- Unfortunately, we are unable to modify our props.
- _However_, we can utilize the **functions** to update the props!
--> `keyword [ variable, function ] = hook(initial value);`

## Re-rendering
We can use a callback function to help with rendering processes.
- useState can take raw value but also a callback function.

ex: 
```jsx
const [ count, setCount ] = useState(0); // raw value
const [ count, setCount ] = useState(() => 0); // CB Function
```
- Callback function renders initial value ONCE.

We have another means that we can utilize to help us determine state values:

## prevState
`prev` is a required aspect and is associated with the variable within the useState( ) process. Aka: **prev = previous State.**
- This allows us to view the previous value within the variable and run the process like before.
    - Currently it doesn't seem to do much more for us; however, it does provide us with the ability to handle our data in a different way.
    - We can know take in our value and manipulate it in different ways without needing to leave our function.

ex: with prevCount
```jsx
    const countUp = () => {
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
    }
```

onChange & onSubmit
- A SyntheticEvent that mimics DOM events.
- In this case, when something _changes_ or when a form is _submitted_.

<br>

## handleChange()

We want to capture the values for the submitted form(the values from the input fields):
- We can use **state** to store our data.
- We can do this with an **onChange** event. 
- Each time a user types into our input field, it will "change" and trigger a function that we will create to manage our input data.

**onChange**: This triggers an anonymous function that passes the event through it.
- This event allows us access to the targets value.

<br>

## handleSubmit()

We want to create a function to trigger when a submit event happens.

**onSubmit**: An event handler function to trigger when a submit event takes place on a form.
- Submit event fires on the form element itself when the user clicks a submit button or presses enter while editing a field.
- [MDN Web Docs FormElement: submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) 

Our submit event is usually how we trigger a push/addition to local front end data _or_ call to our servers to send off the information to be processed and added to the DB by the server.

//console.log("In dom.js file, linked via src in script tag");

/* 
    ? DOM
    - Document Object Model
        - only thru browser
    
    Frame:
        - Document: HTML page
            - is global variable
        - Object: elements(tags) and comments(nodes) 
    
    - Data representation of objects that compromise the structure and content of a document on the web

    Basic Structure
    - Document
        - HTML
            - Head
                - Metadata
                - Link
                - Title
            -Body
                - Nav
                - Header
                - Div
                - And any of their attributes 
    ? BOM
    - Browser Object Model
    - Window object/variable that we can gain access to
    - Has various methods available to us

*/

function askForStuff() {
    prompt();
}

// askForStuff();

// Document Variable - Global
console.log(document);
console.log(document.url);
console.log(document.location);
console.log(document.title);
// Reassignment"
document.title = "DOM Updated Lesson";
console.log(document.title);

//? Creating our first element
/* 
    Chain of events to add new element:
    1. Create our element.
    2. Apply our values (reassigning values to property keys)
    3. Place our element (adding to the doc body object)

    Created variable to store a newly made element
    Our variable now has access to various properties:
        - innerHTML: can inject (reassign) a block of HTML
        - innerText: returns the visible text contained in a node
        - textContent: returns the full text
        ex: 
            <p>Hello <b>World</b> </p>
            - innerText would return just "Hello"
            - textContent would return "Hello World"
*/
let h1 = document.createElement("h1");
// 
h1.innerText = `Creating my first DOM element`; // reassigning the innerText 
// console.log(h1);

/* 
    -Access global document variable 
    - step into with dot notation the document body 
    - use appendChild method to add new element/tag to our HTML body 
*/
document.body.appendChild(h1);

// Altering the element via its properties 
h1.style.color = "red";
h1.style.textAlign = "center";
// We can also build a general CSS; however reassigning the style attribute to these new values 

h1.style = `text-shadow: 2px 2px 2px grey;
color: red;
text-align: center;`;

// here we can do one off or multiple style attributes 

h1.className = "h1-class-name";
h1.id = "set-id";

/* //? Finding elements 
    HTMLCollection
    - An array like object
    - Allows access to index, properties, and methods to help navigate and modify
    -//! Does not allow you to modify a group of elements all at once
    - Can loop thru this
    - Can use .length property to get the size of the list(# of targeted elements)
    
    To get singular element:
    - use array notation [0]
    - use .item() method

    Accessing Multiple Elements requires these methods:
    - .getElementsByTagName()
    - .querySelectorAll()
    - .getElementsByClassName()
    */

    let li = document.getElementsByTagName("li"); 
    console.log(li);
    console.log(li[0]); // target single list tag

    let bathroom = li[0];
    bathroom.style.color = "red";
    
    // li.style.color = "blue"; Cannot set the color of an Array, tis is not targeting all items at once
    // an array cant have a color type DUH

    for (i of li) {
        console.log(i);
        i.style.color = "blue"; // this trumps red above. Items read last trumps above
    }

/*//!  .querySelector()
        - Grabs the first instance of an element or null if nothing is found
        - Can target by ID, Class(className), or Element
            - Will need to append # for ID
            - Will need to append . for Class


*/

// let firstLi = document.querySelector(li)
// console.log(firstLi);

let toDoList = document.querySelector("#listTitle");
console.log("querySelector(#):", toDoList);
toDoList.style.textAlign = "center";

// Only targets first instance of class
let listItem = document.querySelector(".listItem");
listItem.style.textAlign = "center";

//!  .querySelectorAll()
//     - Returns a static nodeList(array) list of elements
//     - static will not update

let nodeListLi = document.querySelectorAll("li");
console.log("querySelectorAll:", nodeListLi);
// console.log(nodeListLi[0]);

//* Static Example
let newListItem = document.createElement(`li`);
// target our ul
let ul = document.getElementById("ulToDo");
console.log(ul);

newListItem.className = "listItem";
newListItem.innerText = "New Item Test";
// Styling or any other attributes are not set to this "new element" that was created
ul.appendChild(newListItem);

// We can see how the other li elements are different via the console
console.log(li);

// .getElementsByClassName() // useful for grabbing all items with a specific classname
let liClass = document.getElementsByClassName(listItem); // easy to put it in a variable
console.log(`\n-------------------------`);
console.log(`ByClassName: `, liClass);

//? Event listeners
/* 
    Allow us to execute a function when an event occurs
    .addEventListener()
        - Dom node method
        - Requires an event to "listen" for or type and a callback function
*/

let btn = document.getElementById(`submit`); // grabs/creates reference to the button w/id "submit"
// if we wanted to see all node//elements properties available to us:
let btnNode = document.getElementsByTagName(`button`);
//console.log(btnNode);

// Directly adding and testing the event listener method
//btn.addEventListener("click", (event) => {
//    console.log(event);
//    console.log("I clicked the button")
//})

/* Goal: have the input text be added to the list on the page

    Steps for Adding an Item to the List
        // - Capture the input value from the HTML
        // - Use the button and click (pass/capture the input value)
        - Create a new element (li)
        - Assign values to new elements (attributes)
            - new li gets class(className)
            - assign innerText to input value
        - Append the new element to the parent element/node/box

    Functionality Step:
        // - add event listener to the button
        // - use variables to contain the HTML tags we're referencing (documentGetElementById)
        // - build build function that creates and assigns attributes for the new li element
*/

// Add click event to button
btn.addEventListener("click", addItem);


// Created variable input to reference and use input of HTML
// let input = <input type="text" id="listInput" placeholder="ToDo Item" />;
let input = document.getElementById("listInput"); // grab value, by id "listInput"

// Build our function: use declarative format, name it addITem, no parameters
function addItem() {
    // capture value from the input: .value property
    // targeting the input node via the variable name and whatever info is being stored in the value property
    console.log(input);
    
    // create a new li element
    let newItem = document.createElement("li");

    // assign our property values
    newItem.className = "listItem";
    newItem.textContent = input.value;

    // append new element to parent
    ul.appendChild(newItem);

    // resets value to blank
    input.value = "";
}

//? Creating something NEW
// Global variables: build button, parent container, mock data
let buildBtn = document.getElementById("table-btn");
let parentShellDiv = document.getElementById(`shell-div`);
const myList = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];

// Event listener with the button
buildBtn.addEventListener("click", buildTable);

// Build function to create everything, create all elements and display them
function buildTable() {
    // testing function with event listening: it worked
    console.log("running buldtable");

    // perform/create something for each item of the array
    // use the forEach method to create a div, title, ad p tag for each item
    myList.forEach((color, i) => {
        // test with console log
        console.log(color,i);
        //* Create elements
        let div = document.createElement(`div`);
        let h2 = document.createElement(`h2`);
        let p = document.createElement(`p`);

        //* Assign attribute to the new element
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `Item <u><b>${i}</b></u> in my list.`

        // add styling to div container
        div.style = `
        border: 3px solid ${color};
        padding: 1-px;
        `
        //* Append to parent container/element
        // Add h2 and p tag to div
        div.appendChild(h2);
        div.appendChild(p);

        // Add the div to the parent div in HTML
        parentShellDiv.appendChild(div);

    });
    parentShellDiv.style = `
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    `;
}






















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

newListItem.innerText = "New Item Test";
// Styling or any other attributes are not set to this "new element" that was created
ul.appendChild(newListItem);

// We can see how the other li elements are different via the console
console.log(li);













// TODO Write out global variables
// variables to connect the form and one to connect to the table body, something toh old all the animal data (array)
const form = document.querySelector(`form`);
const table = document.querySelector(`tbody`);

// will make array later
let animals = [];

//console.log(form); // we are able to access our various imports based off of the "name we assigned to them"
//console.log(form.name);
//console.log(Object.values(form));
//console.log(form[0].placeholder);

// TODO Create an event listener for form
// Event listener: something to listen for, when heard do the thing
form.addEventListener("submit", (e) => { // e = event
  // We need something to stop the browser from refreshing and erasing our console.log
  e.preventDefault(); // stops default refresh
  //console.log("I submitted the thing!");

  // Create an animal data collection from the input values
    const animal = { // local btw
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value,
    }

    // testing if it works!
    //console.log(animal);

    // Add animal to animals array, PUSH IT
    animals.push(animal);
    console.log(animals);

    // Two new window methods:
    form.reset();
    //form[0].focus(); //! PUTS YOUR CURSOR BACK TO FIRST INPUT
    form.species.focus(); //! PUTS YOUR CURSOR BACK TO FIRST INPUT

    displayTable(); // calling the function in the event so each animal gets displayed when it's added
});

// TODO: Display to the table body (the DOM) (function)
// function will run and add to list
// prob use .push 
function displayTable() {
    console.log(`displayTable()`, animals);

//! use a while loop this will be hella helpful later
//! use a while loop this will be hella helpful later
/* 
while table body has a child in the first position
(if it has anything in it)
    - use the method removeChild on tbody
    - .removeChild requires details on which element to remove
        - the first child need to be removed

*/
while(table.firstChild) {
    table.removeChild(table.firstChild);
}


// use a loop to create the needed table element per animal, assign values, and then append to page
// Each row: an ID(#), the name, the sex, the species
    animals.forEach((a,i) => {
        console.log(`in forEach loop: `, i, a)

        // create elements
        let tr = document.createElement(`tr`);
        // using names of what type of data will be in each "td" for cleanliness 
        let id = document.createElement(`td`);
        let name = document.createElement(`td`);
        let sex = document.createElement(`td`);
        let species = document.createElement(`td`);

        // assign element values
        id.textContent = i ++; // i + 1;, using the index position in array and adding 1
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;

        // append elements to dom/parent
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr); // passes tr (table row) into table
    });
}
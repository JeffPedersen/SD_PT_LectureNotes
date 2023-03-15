//ToDo:
/*
    + Make needed global variables  
    + Build fetch to test API endpoint
    - Make an array variable to hold recipes
    - Connect to the DOM o the html (buttons in nav, divs for the cards)
    - Build a function to display random recipe card
    - Build a function to display the deck of recipes
*/
//Global variables 
const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "a5128b4e07f4440da62bc28a18f38bef"
let buildURL = `${url}/?apiKey=${apiKey}`;
// DOM elements
const searchForm = document.querySelector("#search-form") // links the button "search-form" 

// Build function for displaying random recipe single card
const displayRandomCard = recipe => { // expressive function
    console.log(recipe); // logs to ensure our fetch is working
    const randomCard = document.querySelector(".random-card");

    // Replaces cards instead of them stacking up
    while(randomCard.firstChild) { 
        randomCard.removeChild(randomCard.firstChild)
    }

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img; // using our obj to place the value.
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-success';
    btn.textContent = "Add Recipe";

    //* Attach Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);

}

// Build function for our saved recipe

// Event listener
searchForm.addEventListener("submit", (e) => { // e for event
    e.preventDefault(); // stops our page from refreshing due to default properties of our form


//Fetch()
fetch(buildURL)
    .then(res => res.json()) // takes whatever resolves and json's it
    .then(data => {
        // console.log(data);
        let recipe = data.recipes[0]; // pathway to target the individual recipe object
        let obj = {
            title: recipe.title,
            img: recipe.image,
            src: recipe.sourceUrl,
            vegan: recipe.vegan,
            vegetarian: recipe.vegetarian,
        };
        displayRandomCard(obj); // pass our new object as an argument to display func
    }) // takes that data and logs it
    .catch(err => console.error(err)); // catch and logs an error (in case)
});
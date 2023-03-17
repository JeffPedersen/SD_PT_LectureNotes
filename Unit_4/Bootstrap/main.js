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
let storedRecipes = [];
// DOM elements
const searchForm = document.querySelector("#search-form") // links the button "search-form" 

// Function to properly append children/elements
const removeElements = (element) => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

// Build function for displaying random recipe single card
const displayRandomCard = recipe => { // expressive function
    //console.log(recipe); // logs to ensure our fetch is working
    const randomCard = document.querySelector(".random-card");

    // Replaces cards instead of them stacking up
    removeElements(randomCard);

    // Will replace cards 
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
    btn.onclick = () => {
        // when thebutton is clicked: push the recipie object to the stored recipie array
        storedRecipes.push(recipe);
        // Run the display stored recipe function
        saveRecipeTable();
    };

    //* Attach Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);
};

// Build function for our saved recipe
const saveRecipeTable = () => {
    //console.log("Saved the recipe func: array - ", storedRecipes);

    let keptCards = document.getElementById("kept-cards");

    removeElements(keptCards);

    storedRecipes.map((recipeObj) => {

    // Create Elements
    let div = document.createElement("div");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cBody = document.createElement("div");
    let cTitle = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");

    // Assign attributes
    div.className = "col";
    card.className = "card";
    img.className = "card-img-top";
    img.src = recipeObj.img;
    img.alt = recipeObj.title;
    cBody.className = "card-body";
    cTitle.className = "card-title";
    cTitle.textContent = recipeObj.title;
    p.className = "card-text";
    a.href = recipeObj.src;
    a.target = "_blank";
    a.textContent = "Link to Recipe";

    // Append 
    p.appendChild(a);
    cBody.appendChild(cTitle);
    cBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cBody);
    div.appendChild(card);

    keptCards.appendChild(div);
    });

};

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
        };
        displayRandomCard(obj); // pass our new object as an argument to display func
    }) // takes that data and logs it
    .catch(err => console.error(err)); // catch and logs an error (in case)
});
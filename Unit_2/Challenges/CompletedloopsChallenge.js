// ! For Loop Challenges
//Challenge: using a for loop, count to 20, by 2's

//Challenge: using a for loop, count from 10 to 0, going down by 1

//Challenge: using a for loop, count from 0, going down by 2's to -24

// Challenge: using a for loop, go through a name and display each letter individually
let name = "Kenn";

// Challenge: Make a for loop where you add up all the numbers from 1 to 50 (should equal 5050)

// ! For In Loop Challenge:
// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name


for (i = 0; i <= 20; i += 2) {  
    console.log(i)
}

for (i=10; i >= 0; i -=1) {
    console.log(i)
}

for (i=0; i >= -24; i -= 2) {
    console.log(i)
}

let name = "Kenn";
for (let i = 0; i < name.length; i ++) { // looks at each letter of "firstName", counts and assigns it a number
    console.log(name[i]);
}

var sum = 0; // Not sure if 5050 is the right answer...
for (var i = 1; i <= 50; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 50 is: " + sum);


// CSS makes it easier.... text-transform: capitalize;
// WHAT ABOUT McKenzie!
var name = "jOhN";
var capitalizedName = "";
    for (var i in name) {
        if (i == 0) {
        capitalizedName += name[i].toUpperCase();
        } else {
        capitalizedName += name[i].toLowerCase();
    }
}
console.log(capitalizedName);


function capitalize(someWord) {
    return someWord.charAt(0).toUpperCase() + someWord.slice(1);
  }
  
  console.log(capitalize('tomato'));     // should print 'Tomato'
  console.log(capitalize('BACON'));      // should print 'Bacon'
  console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
  console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
  


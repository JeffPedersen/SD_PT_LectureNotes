/* 
    !Unit 2: data structures
    - How we organize our data
    - Utilize arrays and objects and use functions to interact with them

    ? Array
    - Denoted with square brackets [  ]
    - Indices start at zero
        - Indices do not reflect length 
    - Using a property "length", we can find the sum total of items in the array. 
*/
// Indices    0        1        2       3           4           5
let list = ["milk", "bread", "eggs", "bacon", "vegetables", "chocolate"]
console.log(list[3]) // if we want to console.log bacon
console.log(list.length); // if we want to get the number of items in out array (1 higher than highest index)
console.log(list[list.length]); // list[4], we get undefined. 
console.log(list[list.length - 1]); // gives us the last item on the array
console.log(list.slice(0, 3)); // gives us the first 3 items on the array
console.log(list.slice(1, 3)); // gives us the 2nd and 3rd items on the array

list[0] = "horchata" // you can reassign items in your array after establishing it
console.log(list); // [ 'horchata', 'bread', 'eggs', 'bacon', 'vegetables', 'chocolate' ]

//? Example 2
// Indices     0    1    2      3           4                   5           6
let sumo = ["enho", 5, true, "hakuho", "tochinoshin", ["ura", true, 100], "ryuden"]; // arrays in arrays
console.log(typeof sumo); // We get "object" because javascript considers arrays to be objects
console.log(sumo instanceof Array); // true. We can use instanceof if an array returns a true or false value
console.log(sumo[5]); // pulls our subarray [ 'ura', true, 100 ]
console.log(sumo[5][0]); // first item in subarray
console.log(sumo[5][1]); // second item in subarray 
console.log(sumo[5][2]); // third item in subarray

/* 
    Try building out and console.log some arrays later
*/

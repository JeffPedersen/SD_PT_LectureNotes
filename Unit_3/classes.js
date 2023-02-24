/* //! Classes
    - added 2015
    - A function that allows us to create a specific object(s)
    - Used to define a category/set of objects 
        - objects that have similar details but unique values to those details
    
    !Base Structure:
    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }

        methodName() {
            ... code to run
        }
    }

 */

// Ex: Create an item class to define things sold in a store
//? As you enter this.key = parameter the above parameter turn bold
class Item {
//      3               4
    constructor(name, desc, price) {
//        5    6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Class keyword that denotes(tells JS) what "type" of function we are building
        - classes are a function
    2. Class name: Note class names are done in Pascal Casing to help determine what type of function we are referencing in our code
        - pascal case: TotalValue, FirstThingFirst
    3. Constructor keyword: is activated when we create a new object. Builds what sort of keys and values will be associated with out objects
        - building an object from scratch
    4. Parameters of our constructed object. Establish the values of our new object.
    5. This keyword - Refers to "this" specific object being created
    6. The name of a key to our new object. (In this example, an Item object will have 3 keys: name, description, and price)
    7. The value for those keys
 */

// Example: Create class called NewObjects & create an object off the class
class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}
let one = new NewObject();
//console.log(one);
one.name = "Sample";
//console.log(one);

let itemZero = new Item();
console.log(itemZero); // returns an object with the Item keys that hold undefined values

let itemOne = new Item("Chicken", "Meat", 6.99);
console.log(itemOne);
itemOne.name = "Beef";
console.log(itemOne); // reassigned name from chicken to beef

//TypeError: Class constructor Item cannot be invoked without 'new'
// let brokenItem = Item();
// console.log(brokenItem);

//! Factory Function ------------------------------------------------------------------------
// Using a function to handle the object creation

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

// build a function to process the items
function processItems(itemName, desc, cost) {
    return new Item(itemName, desc, cost);
}
let useFunction = processItems(iType, iDesc, iCost);
console.log(useFunction);


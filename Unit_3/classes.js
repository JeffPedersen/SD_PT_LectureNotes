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
// 1    2
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
    2. Class name: Note class names are done in Pascal Casing (Starts uppercase and subsequent word capitalized)
        - pascal case: TotalValue, FirstThingFirst
    3. Constructor keyword: is activated/instantiate when we create a new object. Builds what sort of keys and values will be associated with out objects
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

//! Methods ---------------------------------------------------------------------
//Generating our own methods for use with our objects

class deptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // makes default value for this key
    }

    //      1         2
    addToInventory(newItem) {
        //3         4
        this.items.push(newItem);
        console.log("An item was added!");
        console.table(this.items); // adds to table
    }
}

// 5
let dryGoods = new deptInventory("Dry Goods");
let itemTwo = new Item ("corn", "canned", 0.79);

//6 
dryGoods.addToInventory(itemTwo); // call object (drygoods) add to inventory(class) pass it an item (itemTwo) passes thru addToInventory - passes inventory(canned corn) 
dryGoods.addToInventory(itemOne);
console.log(dryGoods); 

/* 
1. Establish a name for our method.
2. This method requires a parameter. () 
3. "This" keyword is referencing "Dry Goods" object and adding to it's array of items. 
4. Using an array method to push to the items array
5. Creating a new dept object named dryGoods. Also creating new item.
6. Using dot notation to target our method within our dryGoods object and passing items 
*/

//! Factory Methods

class Expense {
    // static keyword, creates a new expense
    // Only reachable globally
    static addUpchargeForProfit(wholesale) { // wholesale is parameter
        // calculate the wholesale charge and store in a variable
        let upcharge = wholesale + wholesale * 0.25; // adds wholesale + .25 wholesale
        return new Expense(wholesale, upcharge);
    }
    // basic constructor of key value pairs (nothing new)
    constructor(w, u) { // represents w=wholesale and u=upsale
        this.purchasedPrice = w;
        this.sellAt = u;
    }
    // Add tax method
    addTax(x) { // x is just acceptable value in code block
        let percentage = x;
        //set the value of sellAt to a variable
        let saleCost = this.sellAt;
        // write and set thew taxed cost
        this.plusSalesTax = (saleCost + saleCost * percentage).toFixed(2); 
        // toFixed(2) converts number to string and rounds to a specified number of decimals (2)
    }
}

let itemToSell = Expense.addUpchargeForProfit(1); // 
console.log(itemToSell);

let = anotherItemToSell = Expense.addUpchargeForProfit(2);
console.log(anotherItemToSell);

//! Class Inheritance
// With each object we create, those methods are included to those specific objects. The children inherent from the parent class

// anotherItem has the "addTax" method due to inheritance 
anotherItemToSell.addTax(0.075);
console.log(anotherItemToSell);

// anotherItemToSell.addUpchargeForProfit(3); //TypeError: anotherItemToSell.addUpchargeForProfit is not a function


// Static is NOT for the children

// Note: that anything that is static will not be inherited into those new objects. For our itemToSell and anotherItem, we won't have access to the addUpchargeForProfit method.




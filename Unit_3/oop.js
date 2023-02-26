//! Objects Oriented Programming
/* 
- can do a lot of things
- encapsulated data and behavior through an exposed interface
    (we can access how we build and store data/dataType/values)
- allows for inheritance of behavior (methods/functionality) via parent class that can share methods
- abstractions of complexity
    (distills down something complex)
- polymorphism of behavior (can act/do many things in it's many forms)
*/

//! Encapsulation 
// allows a set of data within an object stored as a property

class Pet { // flexible template for keys
    constructor(name, color) {
        this.name = name; // going to have a name and its name is
        this.coloration = color; // key is coloration
    }
    speak() { 
        return `${this.name} says, "${this.voice}!"`
    }
}
let buttons = new Pet("buttons", "tri-color");
let tiny = new Pet("tiny", "fawn brown");
console.log(tiny);
console.log(tiny.speak());
// console.log(`${tiny.name} goes woof!); // alternative but not as good
console.log(buttons.speak());

//! Inheritance --------------------------------------
/*  we can create child classes that can inherit from a parent class

 Ex 1: change up pet class and create child class dog

    New Keywords: extends, super
    - extends denotes that our Dog class is a child of Pet class
    - super sets which properties we are inheriting from the parent class. We can also add additional properties unique to the child class (in this ex, voice).
*/

class Dog extends Pet { //! extends one class off another
    // constructor needs parameters for super and unique properties 
    constructor(name, color, voice) {
        super(name, color); // defines and passes value to properties from/inherited from parent 
        this.voice = voice;
    }
    //! moved this to parent
    // speak() { // want to give speak to dog only
    //     return `${this.name} says, "${this.voice}!"`
    // }

} 

let daisy = new Dog("Daisy", "Tan & White", "Scream");
console.log(daisy);
console.log(daisy.speak());

let lola = new Dog("Lola", "Black & White", "Awooooo");
console.log(lola);
console.log(lola.speak());

// ex 2: Creates child class of Cat from pet class

class Cat extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }
}

let felicia = new Cat("Felicia", "Black & White", "AAAAAAA");
console.log(felicia);
 console.log(felicia.speak()); //? This works once we moved the speak function from dogs to the parent PETS


 //-------------------------------------------------------------

//! Abstraction 
// way to store complex logic that we may associate with out object methods
//* hiding the complexity of how things work via an object methods

// Ex: create a base class that has a method to help us calculate a tip amount with a given tab 
class Tab {
    constructor(sub, tax) {
        this.subtotal = sub; //will set the value of subtotal to sub
        this.tax = tax; //will set the value of tax to tax
        this.tip; // declaring but not initializing tip / We can reassign later ;)
    }

    // Using a method to perform functionality, aka abstraction
    tipAmount(x) {
        // create a total of the subtotal and tax / use variable
        let total = this.subtotal + this.tax;

        // calculate tip and give value
        this.tip = total * x; 
        // calculate final total for the bill
        let finalAmount = total + this.tip; 
        // return final amount
        return finalAmount.toFixed(2); // returns the final in a a format we use $9.99
    }
}

// Set up some variables to hold some information, like sales tax, a tip percentage, and generated a new bill object.
let salesTax = 0.06;
let tipPercent = 0.2;
let dinnerBill = new Tab(54.80, salesTax) // this wants new total and sales tax 
console.log(dinnerBill); //Tab { subtotal: 54.8, tax: 0.06 }

// create 

function calcTip(bill) {
    return bill.tipAmount(tipPercent);
}
console.log(`final cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of: $${dinnerBill.tip.toFixed(2)}`);

//! Polymorphism ---------------------------------
/* 
    How objects respond in relationship from child to parent. 
    All children/siblings can use the methods of the parent.
    Children/siblings can't access properties of siblings (like methods).
*/




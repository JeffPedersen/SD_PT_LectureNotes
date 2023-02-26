/* 
?    Create a program that:
        - Begins with a shopping list as an Array
        - Shopping list has items represented by nested Arrays within the parent Array
        - Each item should have a name, as a String, and a quantity as a Number
            - i.e. let shoppingList = [["milk", 1], ["eggs", 2], ["cheese", 3]];
        * Build out three functions that perform the following:
        - addToList
            - accepts an Array and an item
            - appends the item to the Array
            - IF the item is already in the Array, increments the quantity by 1
        - removeFromList
            - accepts an Array and an item
            - removes the item from the list, no matter where it is located
            - rearranges the Array to not include any gaps
        - updateQuantity
            - accepts an Array, an item, and a quantity
            - updates the item's quantity to match the new quantity
*/

let shoppingList = [
    ["milk", 1],
    ["cheese", 2],
    ["ice cream", 3],
  ];
  
  function addToList(someList, someItem) {
    // your code here
    // should add someItem to someList
    // if the someItem exists, increment the quantity by 1
  }
  
  function removeFromList(someList, someItem) {
    // your code here
    // search someList for someItem and remove it
    // rearrange the rest of the items within the Array
    // so that there are no gaps within the Array
  }
  
  function updateQuantity(someList, someItem, newQuantity) {
    // your code here
    // search someList for someItem and
    // change the quantity to the newQuantity value
  }
  
  addToList(shoppingList, "eggs");
  // adds ["eggs" , 1] to the shoppingList Array
  addToList(shoppingList, "eggs");
  // updates the shoppingList Array to
  // include ["eggs" , 2]
  updateQuantity(shoppingList, "eggs", 12);
  // updates the shoppingList Array to
  // include ["eggs" , 12]
  removeFromList(shoppingList, "eggs");
  // shopping list should now be reset back to
  // [["milk", 1],["cheese", 2],["ice cream", 3]];
  
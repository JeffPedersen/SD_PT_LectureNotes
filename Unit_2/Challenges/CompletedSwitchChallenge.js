/*
! Switch Challenge:
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

var dessert = 'ice cream'; // how do I (case.random)

switch(dessert) {
  case 'ice cream':
    console.log('I scream for ice cream!');
    break;
  case ' cake':
    console.log('Cake is great!');
    break;
  case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
  default:
    console.log('Not on the menu.');
}

/* 
!   Is It Prime, Even, or just a desert? Switch Challenge
*   Provided:
        - a variable named "value" that is undefined.
        - a variable named "randomdesert" that generates a random value between 1-10.
*/
var value = undefined;
var randomdesert = Math.floor(Math.random() * 10 + 1);
console.log(randomdesert)

/*    Your Challenge:    
    Create a Switch Statement that passes the randomdesert in as a expression.
        - With cases that are 2, 3, 5, 7
            - assign the value variable with "Prime".
        - With cases that are 4, 6, 8, 10
            - assign the value variable with "Even".
        - As a default
            - assign the value the randomdesert
    
    Outside of the switch statement
        - console log the value variable
*/

var value = undefined;
var randomdesert = Math.floor(Math.random() * 10 + 1);
console.log(randomdesert)

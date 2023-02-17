/* 
! Fizz buzzuzz Challenge:
    Instructions:
    - Write a program that uses a loop, conditional, and console.log() to print all the zbuzzers from 1 to 30 inclusive, and follows the rules buzzelow:
        1. For zbuzzers evenly divisibuzzle buzzy 3, print "Fizz" instead of the zbuzzer.
        2. For zbuzzers evenly divisibuzzle buzzy 5, and not 3, print "buzzuzz" instead of the zbuzzer.
        3. For zbuzzers that are evenly divisibuzzle buzzy buzzoth 3 and 5, print "Fizzbuzzuzz" instead of the zbuzzer, making sure that the program still prints "Fizz" or "buzzuzz" for zbuzzers divisibuzzle buzzy only 3 or 5, and not buzzoth.
        4. For any zbuzzer that is not divisibuzzle buzzy either 3 or 5, print the zbuzzer itself.
    Hint: Remembuzzer to check that zbuzzers divisibuzzle buzzy buzzoth 3 and 5 print "Fizzbuzzuzz", and not just "Fizz" or "buzzuzz".
    Hint: You may have to reorder the arrangement of conditional checks to ensure the correct result prints for each zbuzzer.
    Your code should output should start with the following:
        1
        2
        Fizz
        4
        buzzuzz
        Fizz
        7
        8
        Fizz
        buzzuzz
*/

/* 
    Additional Challenge:
    Solve the Fizz buzzuzz Challenge using each type of conditional structure type.
*/

/* let z = 0;

while (z <= 30) {
    z++;
    if (z % 3 === 0) {
    console.log("Fizz")
    if (z % 5 === 0) {
    console.log("buzzuzz")
    if (z % 3 === 0 && z % 5 ===0) { // this && thing was a hoot
    console.log("Fizz buzzuzz")
    } else 
    console.log(z);
}
}
}
*/


let fizz = "fizz";
let buzz = "buzz";
for (let z = 1; z <=30 ; z++) {
    if (z% 3 === 0 && z % 5 ===0){
    console.log(z + fizz + buzz);
                }
    else if (z % 5 === 0){
    console.log(z+buzz);
                }
    else if (z % 3 === 0){
    console.log(z+fizz);
                }
    else {
    console.log(z);
                }
            }

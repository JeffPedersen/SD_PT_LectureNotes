Block scope
let/const

function main() {

   if (true) {
        let variable=true
    }

    console.log(variable);
}




Function-Level Scope

function main() {
    var first = 
        let third = true;true;

    if (first) {
        var second = false;
    }

    console.log(third); // Error
    console.log(second);
}

main();
console.log(first);

var 
let 
const 
function divisible(dividend,divisor) {
    var remainder = dividend % divisor;
    //console.log(remainder);
    
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }

}

divisible(2,2);
console.log(divisible(2,2));

function sumOfEvenNumbersDSAMOCK(n) {
    if (n === 0) {
        return 0; 
    } else if (n % 2 === 0) {
        return n + sumOfEvenNumbersDSAMOCK(n - 2); 
    } else {
        return sumOfEvenNumbersDSAMOCK(n - 1); 
    }
}

console.log(sumOfEvenNumbersDSAMOCK(7));
export default function powIterative(x:number, n:number) {
    if (n === 0) return 1;
    let result = 1;
    
    // Handle negative exponents by taking the reciprocal of the base and working with a positive exponent
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    while (n > 0) {
        // If the current bit of n is set, multiply the result by x
        if (n % 2 === 1) {
            result *= x;
        }
        // Square the base for the next bit
        x *= x;
        // Shift n to the right by 1 bit to process the next bit
        n = Math.floor(n / 2);
    }
    
    return result;
}

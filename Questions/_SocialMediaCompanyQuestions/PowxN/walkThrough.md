# Power Function Calculation: Recursive Approach (Divide and Conquer)

## Problem
Calculate \(x^n\), where \(x\) is a base number and \(n\) is an integer exponent.

### Problem Statement
Implement a function to calculate the power of a given number \(x\) raised to an exponent \(n\), accommodating both positive and negative exponents.

### Solution Approach (Recursive - Divide and Conquer)
The solution uses a recursive divide and conquer approach to halve the exponent at each recursive step, significantly reducing the computational complexity. This method effectively handles both positive and negative exponents by leveraging mathematical properties of exponentiation.

### Big O Complexity
- **Time Complexity**: O(log n), where \(n\) is the exponent. The divide and conquer strategy halves the exponent at each step, leading to a logarithmic number of steps.
- **Space Complexity**: O(log n), as the depth of the recursion stack grows logarithmically with the size of the exponent.

# Toeplitz Matrix

## Problem
https://leetcode.com/problems/toeplitz-matrix

### Problem Statement
Given an `m x n` matrix, determine if the matrix is a Toeplitz matrix. A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

### Solution Approach
The solution iterates through the matrix, checking if each element is equal to the element diagonally down and to its right. This check is performed on all elements except those in the last row and last column, as they do not have a diagonal neighbor.

### Algorithm Steps
1. Iterate over the matrix with two nested loops, from `0` to `m - 2` for rows and `0` to `n - 2` for columns, where `m` and `n` are the dimensions of the matrix.
2. At each step `(i, j)`, compare the current element `matrix[i][j]` with the element diagonally down and to the right `matrix[i + 1][j + 1]`.
3. If any elements do not match their diagonal neighbor, return `false`.
4. If the entire matrix satisfies the Toeplitz condition, return `true`.

### Big O Complexity
- **Time Complexity**: O(m * n) - Each element, except those on the last row and column, is checked once.
- **Space Complexity**: O(1) - No extra space is used.

### Key Insights
- **Diagonal Consistency**: The definition of a Toeplitz matrix translates into a consistent rule that can be checked with a simple comparison as we traverse the matrix.
- **Boundary Conditions**: The last row and column are excluded from the checks as they have no diagonal neighbors, ensuring no out-of-bounds errors.
- **Efficiency**: The direct iteration approach is both efficient and sufficient, as we need to inspect each element only once.

### Real-World Applications
- **Image Processing**: Toeplitz matrices can represent uniform gradients in images, and checking for this pattern can be part of image analysis algorithms.
- **Signal Processing**: In signal processing, Toeplitz matrices are used in constructing covariance matrices, where the signal's consistency can be assumed along diagonals.
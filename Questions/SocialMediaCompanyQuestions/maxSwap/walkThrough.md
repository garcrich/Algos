# Maximum Swap

## Problem
https://leetcode.com/problems/maximum-swap

### Problem Statement
Given a non-negative integer, you could swap two digits **at most once** to get the maximum valued number. Return the maximum valued number you can get.

### Solution Approach
The solution iterates over the digits of the number from right to left, maintaining the maximum digit seen so far and its index. When a digit less than the maximum digit seen so far is encountered, it identifies a potential swap that could increase the overall number's value. The first such instance found implies the most significant swap possible, prioritizing the leftmost swap for maximum effect. This approach ensures that the swap, if performed, results in the largest possible number by strategically choosing the digits to swap.

### Big O Complexity
- **Time Complexity**: O(n), where n is the number of digits in the input number. The algorithm needs to iterate through each digit once.
- **Space Complexity**: O(n), primarily due to converting the number to an array of its digits for easy manipulation and comparison.

### Key Insights
- **Iterative Comparison with Max Tracking**: The algorithm keeps track of the maximum digit and its index as it iterates from right to left, allowing for the identification of the optimal swap position.
- **Significance of Swap Position**: By choosing the leftmost position where a digit less than the maximum so far is found, the algorithm ensures the swap has the maximum impact on the value of the number.
- **Single Swap Maximization**: The constraint of swapping at most once is addressed by ensuring the identified swap is the best possible to maximize the number's value.

### Real-World Applications
- **Financial Transactions**: Optimizing numerical values in transactions where digits represent financial units or codes, and maximizing or minimizing values is crucial.
- **Competitive Gaming**: In games or puzzles where numerical strategies are involved, rearranging digits to form the highest possible score or value within constraints can be applied.
- **Data Encoding**: Adjusting numerical codes or identifiers to achieve maximum or preferred values, under specific rules or constraints, for efficiency or standardization.

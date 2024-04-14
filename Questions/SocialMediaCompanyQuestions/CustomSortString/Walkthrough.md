# Custom Sort String

## Problem
[LeetCode Problem Link](https://leetcode.com/problems/custom-sort-string)

## Problem Statement
Given two strings `order` and `s`, your task is to custom sort string `s` according to the order of characters defined in `order`. All characters in `order` are unique. The output should permute the characters of `s` so that they match the specified order. Characters in `s` not found in `order` can appear at any position in the output, and their relative ordering in the input string `s` should be preserved.

## Solution Approach
The solution involves creating a count map for all characters in `s` to efficiently track their occurrences. The algorithm proceeds in three main steps:

1. **Initialize Character Counts**: Iterate through `s` to populate a count map (`charOrderCounter`) that records the number of occurrences of each character.

2. **Sort According to `order`**: Iterate through the characters in `order`, appending each character to the result string as many times as it appears in `s` according to the count map. This ensures characters are added in the custom order.

3. **Append Remaining Characters**: Finally, append characters not in `order` to the result string, preserving their original order from `s`.

## Big O Complexity

### Time Complexity
**O(n + m)**, where `n` is the length of string `s` and `m` is the length of string `order`. The algorithm iterates over both strings at least once.

### Space Complexity
**O(n)**, where `n` is the length of string `s`. The additional space is used for the count map storing the occurrence of each character in `s`.

## Key Insights

- **Efficient Count Mapping**: Utilizing a count map optimizes the lookup and manipulation of character occurrences, which is crucial for the sorting logic.

- **In-place Modification**: The solution carefully modifies the output string based on the input `order`, demonstrating efficient in-place operations that do not require additional data structures for sorting.

- **Order Preservation for Non-Specified Characters**: Characters not specified in `order` are appended in their original sequence, ensuring that the relative ordering is preserved where the custom order does not apply.

## Real-World Applications

- **Custom Sorting Algorithms**: This approach can be adapted for various applications requiring custom sort orders, such as sorting files, database records, or UI elements according to user-defined preferences.

- **Text Processing**: The technique demonstrates a method for rearranging characters or words in text processing applications, such as document editing tools or content management systems, where custom sort orders might be needed.

- **Data Serialization**: In scenarios where data needs to be serialized in a specific format or order, this algorithm provides a foundation for ordering elements before serialization.

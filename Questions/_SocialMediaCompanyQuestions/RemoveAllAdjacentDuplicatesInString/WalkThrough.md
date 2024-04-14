# Remove All Adjacent Duplicates In String

## Problem
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

### Problem Statement
Given a string `s` consisting of lowercase English letters, the task is to remove all adjacent duplicates repeatedly until no such duplicates remain. The process involves choosing two adjacent and equal letters and removing them, continuing this removal process as long as possible.

### Solution Approach
The solution leverages a stack data structure to efficiently manage the removal of adjacent duplicates:

- **Stack Utilization**: Iterate through the characters of the input string, using a stack to keep track of the characters seen so far.
- **Duplicate Removal Logic**: For each character, compare it with the top of the stack. If the current character equals the top of the stack, it forms an adjacent duplicate pair, and both characters should be removed. This is achieved by popping the top character from the stack. If the current character does not form a duplicate with the top of the stack, push it onto the stack.
- **Final String Construction**: After processing all characters, the stack will contain the remaining characters in reverse order. The final string, with all adjacent duplicates removed, is obtained by concatenating these characters in the correct order.

### Big O Complexity
- **Time Complexity**: O(n), where `n` is the length of the input string. Each character is processed once, and each stack operation (push/pop) is O(1).
- **Space Complexity**: O(n) in the worst case, when there are no adjacent duplicates, and thus, nearly all characters might be added to the stack at some point.

### Key Insights
- **Efficient Processing**: The stack-based approach enables efficient handling of characters, allowing for immediate identification and removal of adjacent duplicates.
- **Single-Pass Solution**: The algorithm requires only a single pass through the string, making it time-efficient.
- **Simplicity and Effectiveness**: Using a stack simplifies the problem of tracking previously seen characters and their removal if they form a duplicate pair with the current character.

### Real-World Applications
- **Text Processing**: Similar algorithms can be used in text processing and editing software to implement features like auto-correction or formatting tasks where certain patterns (e.g., duplicate characters or markup) need to be simplified or removed.
- **Data Compression**: In preliminary stages of data compression where simple patterns (like adjacent duplicates) are reduced to make the data more compressible by more sophisticated algorithms.
- **Programming Language Interpreters/Compilers**: Removing redundant tokens or simplifying token streams during the parsing phase of interpreting or compiling code.

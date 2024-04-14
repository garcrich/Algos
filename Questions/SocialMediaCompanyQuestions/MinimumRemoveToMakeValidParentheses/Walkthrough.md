# Minimum Remove to Make Valid Parentheses

## Problem
https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

### Problem Statement
Given a string `s` of `'('`, `')'`, and lowercase English characters, the task is to remove the minimum number of parentheses to ensure the resulting string is valid. 

A parentheses string is valid if it is one of the following:
1. It's empty 
2. contains only lowercase characters 
3. can be written as `AB` (concatenation of A and B) or `(A)`, where A and B are valid strings.

### Solution Approach
The solution uses a stack to track opening parentheses and a set to mark indices of parentheses for removal. The algorithm involves two main steps:

1. **Identifying Invalid Parentheses**:
   - Traverse the string, using a stack to keep track of indices of opening parentheses.
   - When a closing parenthesis is encountered, check if there's a matching opening parenthesis (using the stack).
   - If no match is found, mark the index for removal.

2. **Constructing the Valid String**:
   - After the initial traversal, any remaining indices in the stack represent unmatched opening parentheses and are also marked for removal.
   - Construct a new string by including characters whose indices are not marked for removal.
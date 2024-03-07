# Insert into a Sorted Circular Linked List

## Problem
https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list

### Problem Statement
Given a node from a Circular Linked List which is sorted in ascending order, write a function to insert a value `insertVal` into the list such that it remains a sorted circular list.

### Solution Approach
The solution involves iterating through the circular linked list, finding the correct insertion point for the new value, and updating the pointers to maintain the circular structure and order. Special cases to consider include inserting before the smallest value, after the largest value, or when all nodes have the same value.

### Big O Complexity
- **Time Complexity**: O(N), where N is the number of nodes in the list. In the worst case, we may need to traverse the entire list to find the insertion point.
- **Space Complexity**: O(1), as the insertion does not require additional space proportional to the size of the input list. Only a few pointers are manipulated during the process.

### Examples

#### Example 1:
- **Input**: `head = [3,4,1]`, `insertVal = 2`
- **Output**: `[3,4,1,2]`
- **Explanation**: The new value `2` fits between `1` and `3`. After insertion, the list maintains its sorted order and circular structure, with `head` still pointing to the node with value `3`.

#### Example 2:
- **Input**: `head = []`, `insertVal = 1`
- **Output**: `[1]`
- **Explanation**: The list is initially empty. A new single-node circular list is created with the `insertVal` as its content.

#### Example 3:
- **Input**: `head = [1]`, `insertVal = 0`
- **Output**: `[1,0]`
- **Explanation**: The new value `0` is inserted before the single existing node with value `1`, forming a circular list where the new node (with `insertVal` `0`) points to the original node, and the original node points back to the new node.

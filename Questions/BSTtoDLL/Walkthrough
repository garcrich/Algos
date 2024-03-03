# Convert BST to Sorted Circular Doubly-Linked List

## Problem
https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list

## Problem Statement
Given a Binary Search Tree (BST), convert it to a sorted Circular Doubly-Linked List (CDLL) in place. You should adjust the tree nodes' pointers so that the left pointer acts as the previous pointer, and the right pointer acts as the next pointer in the doubly-linked list. The list must be sorted in ascending order and be circular, meaning the last element links back to the first element, and vice versa.

## Solution Approach
The solution employs an in-order traversal of the BST to ensure nodes are visited in ascending order, which matches the requirement for the sorted CDLL. During traversal, each node's pointers are adjusted to link it with its predecessor and successor in the doubly-linked list. Special care is taken to establish the circular linkage at the end of the traversal by connecting the head and tail nodes directly.

## Big O Complexity

### Time Complexity
**O(n)**, where n is the number of nodes in the BST. The in-order traversal ensures each node is visited exactly once, making the overall process linear with respect to the number of nodes.

### Space Complexity
**O(h)**, where h is the height of the BST. The space complexity is determined by the depth of the recursive stack during the in-order traversal. For a balanced BST, this would be **O(log n)**, but in the worst-case scenario (a completely unbalanced tree), it could degrade to **O(n)**.

## Key Insights

- **In-Order Traversal**: Utilizing in-order traversal guarantees that nodes are processed in ascending order, which is essential for the sorted order of the CDLL.
- **In-Place Modification**: The solution modifies the BST's structure to become a CDLL without using additional data structures, highlighting an efficient in-place transformation technique.
- **Circular Linkage**: Carefully establishing the circular linkage between the head and tail of the list distinguishes the CDLL from a standard doubly-linked list and ensures the circular property is maintained.
- **Edge Case Management**: The algorithm effectively handles edge cases, such as empty trees or trees with a single node, ensuring robustness and reliability.

## Real-World Applications

- **Efficient Data Reorganization**: Demonstrates a method to repurpose existing data structures for new formats or requirements without additional memory allocation, useful in memory-constrained environments.
- **Sorted Data Management**: The technique of maintaining sorted data through pointer adjustments has practical applications in database management and file systems where in-place sorting is beneficial.
- **Circular Buffer Design**: Understanding how to establish and manage circular linkages can inform the development of circular buffers, queues, and other data structures that require efficient wrap-around capabilities.

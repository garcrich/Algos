# Finding the Lowest Common Ancestor (LCA) in a Binary Tree

## Overview

This document outlines a recursive approach to determine the Lowest Common Ancestor (LCA) of two nodes in a binary tree. The LCA is the lowest node in the tree that has both nodes as descendants.

## Approach

The recursive method is inherently suited to the tree structure, allowing for an elegant solution that divides the problem into smaller subproblems corresponding to each node's subtrees.

### Key Concepts

- **Recursive Descent**: The algorithm starts at the root and works its way down the tree, examining each node to determine if it is or contains the LCA.
- **Base Case**: The recursion ends when either the current node is `null`, or it matches one of the target nodes (`p` or `q`). In such cases, the current node is returned upwards in the recursion.
- **Decision Logic**: Upon returning from recursive calls, if both left and right calls return non-null nodes, the current node is the LCA. If only one side returns a non-null, the search continues up that branch.

### Complexity

- **Time Complexity**: O(N), with N being the number of nodes in the binary tree. Each node is visited once.
- **Space Complexity**: O(H), where H is the height of the tree, corresponding to the maximum depth of the recursive call stack. In a balanced tree, this is O(log N), while in a skewed tree, it could be O(N).

## Conclusion

The recursive approach to finding the LCA leverages the natural hierarchical structure of binary trees, providing a clear and efficient solution for identifying common ancestors in diverse applications such as organizational charts, genealogy, and data organization.

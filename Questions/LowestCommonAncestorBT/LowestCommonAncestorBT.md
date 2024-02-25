# Lowest Common Ancestor of a Binary Tree III

## Problem
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii

### Problem Statement
Find the lowest common ancestor (LCA) of two nodes in a binary tree, where each node contains an additional pointer to its parent.

### Solution Approach
The solution involves enhancing the standard `TreeNode` class to include a parent pointer (`TreeNodeWithParent`). The `lowestCommonAncestor` function employs two pointers to traverse upwards from the given nodes `p` and `q`. The traversal continues until the paths from `p` and `q` intersect, indicating the LCA. 

If a pointer reaches the root (null), it switches to the other node's starting position, allowing both paths to align in terms of depth from the root.

### Big O Complexity
- **Time Complexity**: O(H), where H is the height of the tree. The traversal may extend up to the height of the tree in the worst case.
- **Space Complexity**: O(1), as the approach uses a fixed amount of space regardless of the input size.

### Key Insights
- **Cycling Through Trees**: The solution effectively handles trees of different shapes by cycling pointers through both trees, thereby equalizing the path lengths from the root.
- **Parent Pointers Usage**: Utilizes parent pointers, a feature not typically present in standard tree nodes, providing an elegant way to solve LCA problems without additional space for path storage.

### Real-World Applications
- **Hierarchical Structures**: Finding common elements in hierarchical systems like organizational charts or family trees.
- **Network Topology**: In networking, identifying shared nodes or convergence points in network topology.
- **Genealogy Research**: Tracing common ancestors in genealogical trees.

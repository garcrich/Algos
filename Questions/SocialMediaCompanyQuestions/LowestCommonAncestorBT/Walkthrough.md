# Lowest Common Ancestor of a Binary Tree III

## Problem
[Lowest Common Ancestor of a Binary Tree III - LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii)

### Problem Statement
Find the lowest common ancestor (LCA) of two nodes in a binary tree, where each node contains an additional pointer to its parent.

### Solution Approach
The solution involves traversing upwards from the given nodes `p` and `q` using their parent pointers. Two pointers begin at nodes `p` and `q` and traverse upwards in the tree. If a pointer reaches the root (null), it switches to the other node's starting position. This process continues until both pointers meet, which is the lowest common ancestor of the nodes `p` and `q`.

### Big O Complexity
- **Time Complexity**: O(H), where H is the height of the tree. The traversal may extend up to the height of the tree in the worst case.
- **Space Complexity**: O(1), as the approach uses a constant amount of space.

### Key Insights
- **Path Alignment**: By cycling the pointers through both paths, the solution aligns the paths from `p` and `q` to the root, ensuring that they intersect at the LCA.
- **Parent Pointers**: The use of parent pointers allows us to find the LCA without extra space for storing paths or node depths.

### Real-World Applications
- **Hierarchical Structures**: Finding common managers or elements in hierarchical systems like organizational charts.
- **Network Topology**: Identifying convergence points in a network where paths from two nodes meet.
- **Genealogy Research**: Determining a shared ancestor in family trees.


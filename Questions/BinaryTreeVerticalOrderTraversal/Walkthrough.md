# Binary Tree Vertical Order Traversal

## Problem
https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/

## Problem Statement
Given the root of a binary tree, the goal is to perform a vertical order traversal of its nodes' values. The traversal should process the nodes as they appear from top to bottom and column by column. If nodes are in the same row and column, they should be visited from left to right.

## Approach
The algorithm uses a Breadth-First Search (BFS) strategy, storing nodes in a queue along with their corresponding 'column' index. The column index helps to group node values that appear vertically aligned from the perspective of the root. After the traversal, results from each column are combined to form the vertical order traversal.

## Big O Complexity

### Time Complexity 
O(N), where N is the number of nodes in the tree. This complexity arises as each node is processed once during the BFS.

### Space Complexity
O(N), due to the additional data structures (queue and map) used for storing nodes and their column indices. The space requirement is proportional to the number of nodes in the tree.

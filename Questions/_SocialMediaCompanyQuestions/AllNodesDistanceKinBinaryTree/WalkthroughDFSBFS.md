# Find Nodes at Distance K in Binary Tree

## Problem
Given a binary tree and a target node within that tree, find all nodes that are at a given distance k from the target node.

https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
x
## Problem Statement
Given the root of a binary tree, the value of a target node, and an integer k, return an array of the values of all nodes that are at a distance k from the target node. The binary tree does not necessarily have any order (e.g., it is not a BST), and the value k represents the number of edges in the path between the target node and the nodes to be found.

## Solution Approach
The solution involves a two-step process. First, we perform a DFS to annotate each node with its parent, which allows us to navigate the tree in all directions. Then, we use BFS, starting from the target node, to find all nodes at the specified distance k. This process involves moving outwards from the target, considering each node's parent and children, and keeping track of the distance from the target at each step.

## Big O Complexity

### Time Complexity
**O(N)**, where N is the number of nodes in the tree. Each node is visited exactly once during the annotation of parents and once during the BFS traversal.

### Space Complexity
**O(N)** for the space needed to store the parent pointers and the BFS queue. The actual space used at any one time during the traversal is proportional to the breadth of the tree, which is less than N.

## Key Insights

- **Tree Traversal**: Mastery of both DFS and BFS tree traversal techniques is essential, as each serves a unique purpose in the solution.
- **Parent Annotation**: Annotating each node with its parent transforms the tree traversal problem into a more generalized graph traversal problem.
- **Distance Tracking**: BFS is particularly effective for problems involving levels or distances since it processes nodes in layers.

## Real-World Applications

- **Network Routing**: The algorithm is analogous to routing protocols where the goal is to find all nodes within a certain distance from a source.
- **Social Networks**: Finding all connections at a certain degree of separation from a person in a social network.
- **Epidemiology**: Tracing all contacts within a certain number of transfers of an individual in contact tracing applications.

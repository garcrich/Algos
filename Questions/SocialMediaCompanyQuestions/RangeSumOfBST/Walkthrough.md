# Range Sum of BST

## Problem
[Range Sum of BST - LeetCode](https://leetcode.com/problems/range-sum-of-bst/)

### Problem Statement
Given the root node of a binary search tree (BST) and two integers `low` and `high`, return the sum of values of all nodes with a value in the inclusive range `[low, high]`.

### Solution Approach
The solution employs a depth-first search (DFS) strategy to traverse the binary search tree. By leveraging the properties of BST, we can optimize our traversal as follows:
- **Left Subtree Traversal**: If the current node's value is greater than `low`, we explore the left subtree to find values within the range, as all values in the left subtree are less than the current node's value.
- **Right Subtree Traversal**: If the current node's value is less than `high`, we explore the right subtree, since it contains values greater than the current node's value.
- **Sum Accumulation**: When a node's value falls within the `[low, high]` range, we add it to our running sum.

This targeted traversal ensures that we only visit nodes that could potentially fall within the range, thereby optimizing our search and avoiding unnecessary exploration of irrelevant tree branches.

### Big O Complexity
- **Time Complexity**: O(n) in the worst case, where n is the number of nodes in the tree. This worst-case scenario occurs when the tree is extremely unbalanced (e.g., a linear chain), and we have to visit every node. However, for a balanced tree, the effective complexity will be closer to O(log n) for each operation, thanks to the early termination conditions.
- **Space Complexity**: O(h), where h is the height of the tree. This space is used by the call stack during recursion. For a balanced tree, this is O(log n), and for a skewed tree, it could be O(n).

### Key Insights
- **Efficient Traversal**: By utilizing the BST property that left child nodes are less than the parent node and right child nodes are greater, we can efficiently narrow down our search space to find the sum within the given range.
- **Early Termination**: The algorithm smartly bypasses unnecessary subtrees that do not contribute to the sum, enhancing performance.

### Real-World Applications
- **Analytics and Reporting**: Summarizing data that falls within specific ranges, useful in analytics dashboards.
- **Game Development**: Calculating scores or points that fall within certain thresholds for reward distribution.
- **Database Queries Optimization**: The principle of range sum queries can be applied to optimize certain database operations where sum totals within specific ranges are frequently requested.

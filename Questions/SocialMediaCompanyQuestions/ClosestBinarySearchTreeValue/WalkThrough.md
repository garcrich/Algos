# Closest Binary Search Tree Value

## Problem
Given the root of a binary search tree (BST) and a target value, return the value in the BST that is closest to the target. If there are multiple answers, return the smallest one.

### Problem Statement
In this problem, we are provided with the root of a BST and a floating-point target value. Our task is to find the value in the BST that is nearest to the target value. The BST property ensures that for every node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater than the node's value.

### Solution Approach
The solution to this problem leverages the BST property to efficiently find the closest value to the target. Here's a step-by-step approach:

1. **Initialize Variables:**
   - Start with a variable `closest` to store the closest value found so far. Initially, it can be set to the value of the root or `Infinity` if the root is null.
   - Initialize a variable `smallestDifference` with `Infinity` to track the smallest difference between the node value and the target.

2. **Tree Traversal Function:**
   - Implement a recursive function `treeTraversal` that accepts the current node.
   - If the current node is null, return immediately as it signifies we've reached beyond a leaf node.

3. **Update Closest Value:**
   - For each node visited, calculate the difference between the node's value and the target.
   - If this difference is smaller than `smallestDifference`, update `smallestDifference` and `closest` with the current node's value.

4. **Directed Traversal:**
   - Utilize the BST property to decide the traversal path:
     - If the target value is less than the current node's value, move to the left child.
     - Otherwise, move to the right child.
   - This decision process ensures we are always moving towards the target value, efficiently narrowing down the search space.

5. **Invoke and Return:**
   - Start the traversal from the root.
   - Once the traversal is complete, return the `closest` value found.

### Big O Complexity
- **Time Complexity**: O(H), where H is the height of the BST. In the best case (a balanced tree), this is O(log N). In the worst case (a skewed tree), this is O(N).
- **Space Complexity**: O(H) due to recursion. This is O(log N) in the best case and O(N) in the worst case.

### Key Insights
- **BST Property Utilization**: By leveraging the BST property, the solution efficiently narrows down the search space, similar to a binary search.
- **Directed Traversal**: The decision to move left or right based on the target value minimizes the number of nodes visited, optimizing the search process.
- **Handling Edge Cases**: The solution accounts for edge cases, including empty trees and trees where multiple values are equally close to the target.

### Real-World Applications
- **Finding Nearest Values**: This algorithm can be used in databases and search systems to find records with values closest to a given target, optimizing query performance.
- **Game Development**: In AI for games, finding the nearest objects or targets efficiently is crucial for pathfinding and decision-making processes.
- **Sensor Data Analysis**: In systems dealing with real-time sensor data, finding the closest historical data point to a current reading can help in trend analysis and prediction.

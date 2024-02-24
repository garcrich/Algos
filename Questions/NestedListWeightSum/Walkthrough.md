
## Problem
https://leetcode.com/problems/nested-list-weight-sum

# Nested List Weight Sum (DFS Approach)

### Problem Statement
Given a nested list of integers, where each integer is potentially nested within several lists, calculate the total sum of all integers in the list weighted by their depth.

### Solution Approach (DFS)
The solution uses Depth-First Search (DFS) to traverse the nested list. Each integer's value is multiplied by its depth level, and the results are summed together.

### Big O Complexity
- **Time Complexity**: O(N), where N is the total number of integers, including nested ones.
- **Space Complexity**: O(D), where D is the maximum depth of nesting.

<br>

# Nested List Weight Sum (Queue Approach)

### Problem Statement
Calculate the sum of integers within a nested list, each multiplied by the depth at which it is found.

### Solution Approach (Queue)
The queue-based solution iterates through the nested list using a queue to keep track of the current depth of each element, ensuring each integer is multiplied by the correct depth level.

### Big O Complexity
- **Time Complexity**: O(N), N being the total number of integers in the nested list.
- **Space Complexity**: O(B), B being the breadth of the widest level in the nested list.

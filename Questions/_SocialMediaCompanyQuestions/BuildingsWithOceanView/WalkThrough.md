# Buildings With an Ocean View

### Problem Statement
Given a list of building heights, determine which buildings have an unobstructed view of the ocean. The ocean is to the right of all buildings, so a building has an ocean view if all buildings to its right are shorter.

## Problem
https://leetcode.com/problems/buildings-with-an-ocean-view

### Solution Approach
The solution iterates over the building heights from right to left, keeping track of the tallest building seen so far. If the current building is taller than the tallest seen so far, it has an ocean view. We store the index of these buildings. Since the traversal is from right to left, the resulting list of indices is in reverse order and is corrected at the end by reversing the list before returning it.

### Big O Complexity
- **Time Complexity**: O(n), where n is the number of buildings. Each building is checked exactly once.
- **Space Complexity**: O(n), in the worst case where all buildings have an ocean view, we need to store each index in the result array.

### Example
For the input `[4,2,3,1]`, the output is `[0,2,3]`. Buildings at indices 0, 2, and 3 have an ocean view since there are no taller buildings to their right obstructing the view.

### Real-World Applications
- **Real Estate**: Determining which apartments in a coastal area have an unobstructed view of the sea or other desirable vistas.
- **Geographical Mapping**: Identifying peaks in a mountain range that are visible from a certain point.
- **Game Development**: Calculating visibility of objects in a virtual environment for rendering purposes.

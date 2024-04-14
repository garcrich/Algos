# Update Matrix with Nearest Zero Distance

## Problem
Given an `m x n` binary matrix where each `0` represents water and each `1` represents land, find the distance of the nearest `0` for each cell.

https://leetcode.com/problems/01-matrix

## Problem Statement
Given a matrix consisting of `0`s and `1`s, return a matrix of the same dimensions where each cell contains the distance to the nearest `0`. The distance between two adjacent cells is `1`.

## Solution Approach
The solution employs Breadth-First Search (BFS) starting from all cells that contain `0`, considered as sources. BFS is ideal for this type of problem because it explores all possible locations from a source uniformly, extending outwards in waves:

1. **Initialization**: First, all cells containing `0` are added to a queue as starting points, and all cells containing `1` are set to `Infinity` to signify that they have not been visited.

2. **BFS Expansion**: For each cell processed from the queue, explore its four cardinal neighboring cells. If a neighboring cell is unvisited (still set to `Infinity`), update its distance to one more than the current cell's distance and enqueue it.

3. **Result Compilation**: Once the queue is empty, all cells have been assigned their minimum distances to the nearest `0`.

## Big O Complexity

### Time Complexity
**O(m * n)**, where `m` is the number of rows and `n` is the number of columns in the matrix. Each cell is processed at most once, which guarantees that the BFS runs in linear time relative to the number of cells.

### Space Complexity
**O(m * n)** in the worst case when all cells are initially `0` and hence added to the queue at the start. The space used by the queue is the main factor, although the actual space usage at any one time is proportional to the maximum breadth of the BFS tree.

## Key Insights

- **Efficient Level Exploration**: BFS naturally handles level-by-level exploration, ensuring that the shortest paths are determined optimally by processing all nodes at the current distance before moving to the next.

- **Multiple Source BFS**: Starting BFS from multiple sources simultaneously (all `0` cells) efficiently propagates the minimum distances to all reachable cells.

- **Handling Edge Cases**: By initializing distances of `1` cells to `Infinity`, the algorithm cleanly differentiates between visited and unvisited cells, avoiding redundant checks and updates.

## Real-World Applications

- **Urban Planning**: Calculating distances from certain facilities (like water resources, parks, etc.) in urban planning to ensure optimal placement of services.

- **Game Development**: In games, calculating distances from obstacles or targets can help in AI decision making for character movements.

- **Robotics**: Robots in a warehouse can use similar algorithms to find the shortest path to charging stations or exits.

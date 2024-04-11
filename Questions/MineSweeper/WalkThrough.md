# Minesweeper

## Problem
https://leetcode.com/problems/minesweeper

### Problem Statement
You're given an `m x n` char matrix `board` representing the game board of Minesweeper, where:
- `'M'` represents an unrevealed mine.
- `'E'` represents an unrevealed empty square.
- `'B'` represents a revealed blank square with no adjacent mines.
- Digits (`'1'` to `'8'`) represent the number of mines adjacent to this revealed square.
- `'X'` represents a revealed mine.

You're also given an integer array `click` where `click = [clickr, clickc]` represents the next click position among all the unrevealed squares (`'M'` or `'E'`).

The goal is to return the board after revealing this position according to Minesweeper's rules:

1. If a mine (`'M'`) is revealed, then the game is over - change it to `'X'`.
2. If an empty square (`'E'`) with no adjacent mines is revealed, change it to revealed blank (`'B'`) and all of its adjacent unrevealed squares should be revealed recursively.
3. If an empty square (`'E'`) with at least one adjacent mine is revealed, change it to a digit (`'1'` to `'8'`) representing the number of adjacent mines.
   
Return the board when no more squares will be revealed.

### Solution Approach
The solution employs Depth-First Search (DFS) for the recursive revealing of squares:

1. **Initial Click Handling**: If the click is on a mine, mark it as `'X'` and end the game. If the click is on an empty square, proceed with revealing.
2. **Recursive DFS**: From the clicked square, recursively reveal adjacent squares based on the number of adjacent mines:
   - If an empty square has no adjacent mines, reveal it as `'B'` and continue the recursive reveal for all adjacent squares.
   - If an empty square has adjacent mines, mark it with the number of mines and stop recursion for that path.
3. **Direction Exploration**: Use a set of directions to explore adjacent squares, including diagonals.

### Big O Complexity
- **Time Complexity**: O(m * n), where `m` is the number of rows and `n` is the number of columns in the board. In the worst case, we might need to check every square.
- **Space Complexity**: O(m * n) for the recursive call stack in the worst case when the board is fully empty, and we need to reveal all squares.

### Key Insights
- **Depth-First Search (DFS)**: DFS is ideal for exploring all connected 'E' squares to efficiently reveal the necessary parts of the board.
- **Boundary Checks**: It's crucial to perform boundary checks before accessing adjacent squares to avoid index out of bounds errors.
- **Counting Adjacent Mines**: Before revealing an 'E' square, adjacent mines are counted to determine if the square should be revealed as `'B'` or marked with a number.

### Real-World Applications
- **Puzzle Games**: The logic behind revealing squares in Minesweeper can be applied to various puzzle and board games that require uncovering hidden information based on player actions.
- **Graph Exploration**: The DFS approach used for revealing squares can be utilized in applications needing graph traversal, such as network analysis, pathfinding algorithms, and more.
- **Educational Tools**: Minesweeper and similar games can serve as educational tools for teaching algorithmic thinking, recursion, and problem-solving strategies.

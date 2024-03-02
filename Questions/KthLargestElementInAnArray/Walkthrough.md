# Kth Largest Element in an Array

## Problem
[Find Kth Largest Element - LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array)

### Problem Statement
Find the kth largest element in an unsorted array. This means that the kth largest element might not be the kth distinct element.

### Solution Approach
The approach is to utilize a MaxHeap data structure to efficiently find the kth largest element. The heap is built using all the elements from the array. By performing the pop operation k times, the kth largest element can be found.

### Big O Complexity
- **Time Complexity for Constructor**: O(n), as it involves building a heap from the input array.
- **Time Complexity for Finding Kth Largest**: O(k log n), due to performing k extractions from the heap, each of which takes O(log n) time.
- **Space Complexity**: O(n), as we store all elements in the heap data structure.

### Key Insights
- **Heap Property**: A max heap is a complete binary tree where each node is greater than its children, and the root node is the maximum element in the tree.
- **Efficient Extraction**: The top of the heap always contains the maximum element, allowing for efficient repeated extraction of the maximum.

### Real-World Applications
- **Data Analysis**: Selecting the kth statistic from a large dataset, such as median finding or percentile calculation.
- **Game Scoring**: Determining the kth highest score in a leaderboard.
- **Stream Processing**: Continuously processing incoming data streams and finding the kth largest element in a moving window.

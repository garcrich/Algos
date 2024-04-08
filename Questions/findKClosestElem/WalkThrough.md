# Find K Closest Elements in Sorted Array

## Problem
https://leetcode.com/problems/find-k-closest-elements

### Problem Statement
Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order. An integer `a` is closer to `x` than an integer `b` if:
- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`.

### Solution Approach
The solution involves two main strategies:
1. **Binary Search**: First, find the position in `arr` that is closest to `x`. This serves as an efficient starting point since `arr` is sorted.
2. **Two-Pointer Technique**: Starting from the position found, use two pointers to explore elements to the left and right, selecting the `k` closest to `x`. The exploration expands outwards, comparing the distance of left and right elements from `x` to decide which to include.

### Big O Complexity
- **Time Complexity**: O(log n + k), where `n` is the number of elements in `arr`. The logarithmic component comes from the binary search, and the linear component relates to finding the `k` closest elements.
- **Space Complexity**: O(1), assuming the space used for the result does not count towards the complexity. The approach uses a constant amount of additional space.

### Key Insights
- **Efficient Starting Point Identification**: Using binary search to find the closest element to `x` minimizes the number of elements to consider.
- **Balanced Selection**: The two-pointer method ensures that the closest elements are chosen, respecting the sorted order of `arr`.
- **Edge Case Handling**: Special attention is paid to the boundaries of the array to avoid accessing elements out of bounds.

### Real-World Applications
- **Geolocation Services**: Finding locations (e.g., restaurants, gas stations) closest to a user's current location in a sorted list of distances.
- **Recommender Systems**: Selecting products, movies, or songs that are closest to a user's preferences, based on a sorted list of ratings or similarities.
- **Financial Analysis**: Identifying periods (e.g., days, months) with financial metrics (e.g., stock price)

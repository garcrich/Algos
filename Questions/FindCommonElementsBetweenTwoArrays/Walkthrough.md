# Intersection Counts of Two Arrays

## Problem
[Insert Problem Link Here]

### Problem Statement
Given two 0-indexed integer arrays `nums1` and `nums2` of sizes `n` and `m`, respectively, the task is to find two values:
1. The count of numbers from `nums1` that appear in `nums2`, considering the frequency of each number.
2. The count of numbers from `nums2` that appear in `nums1`, also considering the frequency of each number.

### Solution Approach
The solution involves using two hash maps to track the occurrences of each number in both arrays. This way, it's possible to account for the frequency of each number, including duplicates, in the final count. The algorithm proceeds in several steps:
- First, iterate through `nums1` and `nums2`, filling the respective hash maps with counts of each number.
- Then, for each unique number in `nums1`'s map, check if it exists in `nums2`'s map, and add its count to the total count of `nums1` numbers appearing in `nums2`.
- Repeat the process for `nums2`, checking against `nums1`'s map, to find the total count of `nums2` numbers appearing in `nums1`.
- The result is an array of two integers representing these counts.

### Big O Complexity
- **Time Complexity**: O(n + m), where `n` is the length of `nums1` and `m` is the length of `nums2`. The linear complexity arises from iterating through each array once to populate the maps and then again to calculate the occurrences.
- **Space Complexity**: O(n + m), due to the additional space required for the hash maps that store counts of each number in the arrays.

### Key Insights
- **Hash Maps for Frequency Counting**: Utilizing hash maps to count occurrences efficiently handles the problem of counting duplicates.
- **Efficient Counting with Maps**: The solution avoids nested loops and thus reduces the potential time complexity from quadratic to linear.
- **Handling Duplicates**: The approach accurately accounts for duplicates by considering the frequency of each number, which is essential for the problem at hand.

### Real-World Applications
- This methodology can be applied in various real-world scenarios where counting occurrences and managing duplicates are crucial. Examples include inventory management, data analysis for trend identification, customer purchase behavior analysis, and more.

# Maximum Subarray Problem

## Problem
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

https://leetcode.com/problems/maximum-subarray

## Problem Statement
Given an integer array `nums`, find the subarray (containing at least one number) which has the largest sum and return its sum.

## Solution Approach
The solution utilizes Kadane's Algorithm, which is an optimal method for this problem with a time complexity of \(O(n)\). It iterates through the list, calculating the sum of contiguous subarray up to the current position and determining the maximum sum over all positions.

### Steps of Kadane's Algorithm:
1. **Initialize**: Set `currentSum` to 0 and `maxSum` to negative infinity.
2. **Iterate**: Go through each element of the array.
   - **Update `currentSum`**: Add the current element to `currentSum`.
   - **Update `maxSum`**: If `currentSum` is higher than `maxSum`, update `maxSum`.
   - **Reset `currentSum`**: If `currentSum` becomes negative, reset it to 0. This step ensures that we do not carry forward a negative sum that would reduce the potential of future subarrays.
3. **Result**: The value of `maxSum` at the end of the iteration is the largest sum of any contiguous subarray.

## Big O Complexity

### Time Complexity
**O(n)**, where `n` is the number of elements in the input array. The algorithm passes through the array a single time with constant operations for each element.

### Space Complexity
**O(1)**, as it uses only a few variables for storing intermediate sums and the final result, regardless of the input size.

## Key Insights

- **Optimal Substructure**: The optimal solution for the problem up to the current element can be built from the optimal solution to previous elements, a hallmark of dynamic programming.
  
- **Negation of Negatives**: By resetting the `currentSum` when it is negative, the algorithm prevents negative values from diminishing the sums calculated from subsequent array elements.

- **Single Pass Efficiency**: Kadane's algorithm efficiently processes the array in a single linear scan, making it much more efficient compared to naive approaches.

## Real-World Applications

- **Financial Analysis**: Used for finding the best continuous period for investment returns in stock price data.
  
- **Data Analysis**: In any temporal dataset where you need to find the best consistent period for a particular metric.

- **Signal Processing**: Can be used to find the strongest continuous signal within a larger set of data points.

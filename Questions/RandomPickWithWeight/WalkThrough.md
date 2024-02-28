# Random Pick with Weight

## Problem
[Random Pick with Weight - LeetCode](https://leetcode.com/problems/random-pick-with-weight)

### Problem Statement
Implement a class `Solution` which can pick an index randomly with probability proportional to its weight.

### Solution Approach
The class `Solution` uses a prefix sum array to accumulate the weights. For each pick, it generates a random number between 1 and the total sum of weights. It then uses binary search on the prefix sum array to find the index where this random number would fit, which is essentially picking an index based on its weight.

### Big O Complexity
- **Time Complexity for Constructor**: O(n), where n is the number of weights, as we are iterating through all weights once to create the prefix sum array.
- **Time Complexity for pickIndex**: O(log n), since we are using binary search to find the appropriate index.
- **Space Complexity**: O(n), for storing the prefix sum array which has the same size as the input array.

### Key Insights
- **Prefix Sums**: By converting weights into prefix sums, we can map a random number to an index such that the probability of picking an index is proportional to its weight.
- **Binary Search**: Binary search is used to efficiently find the target index for the randomly generated number.

### Real-World Applications
- **Sampling**: Picking items from a set with non-uniform probabilities.
- **Load Balancing**: Distributing tasks among servers where servers with higher capacity get a higher probability of being chosen.
- **A/B Testing**: Randomly showing different versions of a product to users based on predefined weights to ensure controlled exposure.

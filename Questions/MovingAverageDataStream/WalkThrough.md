# Moving Average from Data Stream

## Problem
[Moving Average from Data Stream - LeetCode](https://leetcode.com/problems/moving-average-from-data-stream)

### Problem Statement
Implement a class to calculate the moving average of all integers in the sliding window of size `size`.

### Solution Approach
The approach is to use a sliding window of fixed size to store the recent values and a variable to keep track of the sum of the values in the window. As a new value enters the window and an old value exits, we update the sum accordingly. The moving average is then the sum of the window divided by the window's current size, which is efficient and avoids recalculating the sum each time.

### Big O Complexity
- **Time Complexity**: O(1) for each call to `next(val)` due to constant time update operations.
- **Space Complexity**: O(n), where n is the size of the window to store the values.

### Key Insights
- **Sliding Window**: A queue-like data structure to maintain a list of the last `size` values.
- **Running Sum**: A variable to keep the sum of the values in the window, allowing for constant time average calculation.
- **Constant Time Updates**: Add the new value to the sum and subtract the oldest value when the window is at full capacity before computing the average.

### Real-World Applications
- **Real-Time Monitoring**: Calculating real-time averages in monitoring systems, e.g., CPU usage over the last minute.
- **Financial Analysis**: Moving averages are used in stock trading to analyze stock prices.
- **Sensor Data**: In IoT systems, moving averages can smooth out sensor readings to account for spikes or noise.

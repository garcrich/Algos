# Simplify Unix Path

## Problem
https://leetcode.com/problems/simplify-path

### Problem Statement
Given an absolute path for a file (Unix-style), convert it to the simplified canonical path. In a Unix file system, a period `.` refers to the current directory, a double period `..` refers to the directory up a level, and any multiple consecutive slashes (i.e., `//`) are treated as a single slash `/`. The canonical path should start with a single slash `/`, not end with a trailing `/`, and only contain the directories on the path from the root directory to the target file or directory.

### Solution Approach
The solution involves splitting the path by `/` to process each part of the path individually, using a stack to keep track of the directories traversed. This approach allows easy handling of `.` and `..` directives by ignoring the former and popping the last directory for the latter. After processing all parts, the stack is joined with `/` to form the simplified path.

### Big O Complexity
- **Time Complexity**: O(n), where n is the length of the input path. The algorithm iterates over each character of the path once when splitting it into segments and then iterates over the segments to process them.
- **Space Complexity**: O(n), as a stack is used to keep track of the directories, which, in the worst case, could be as large as the number of segments in the path.

### Key Insights
- **Stack Usage**: A stack is ideal for this problem because it easily handles the directory structure's hierarchical nature, allowing for straightforward implementation of `.` and `..` path modifications.
- **String Splitting and Joining**: Splitting the path into segments and later joining the processed segments simplifies handling slashes and special directives.
- **Efficient String Manipulation**: By treating the path as an array of segments, the solution avoids dealing with edge cases related to slashes directly, leading to cleaner and more understandable code.

### Real-World Applications
- **File System Navigation**: This algorithm can be part of a file explorer or shell utility to resolve paths given by the user into their canonical forms, ensuring consistent and error-free navigation.
- **URL Normalization**: Similar logic can be applied to normalize URLs in web applications, ensuring that different URLs pointing to the same resource are treated equivalently.
- **Security**: Preventing directory traversal attacks in web applications by resolving paths to their simplest form and ensuring access is only granted to intended resources.

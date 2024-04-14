# Dot Product of Two Sparse Vectors

## Problem
https://leetcode.com/problems/dot-product-of-two-sparse-vectors

#### Problem Statement
Compute the dot product of two sparse vectors. A sparse vector is characterized by having mostly zero values. The solution should efficiently handle the sparsity of the vectors.

#### Solution Approach
The solution involves representing each sparse vector using a `Map` to store only the non-zero elements and their indices. The `dotProduct` method iterates through the non-zero elements of one vector and checks if the other vector has a non-zero element at the same index. If so, it multiplies the corresponding values and adds them to the total dot product.

#### Big O Complexity
- **Time Complexity**: O(k), where k is the number of non-zero elements in the smaller of the two vectors. This is due to iterating only over the non-zero elements.
- **Space Complexity**: O(k), where k represents the number of non-zero elements in each vector. This space is used for storing these elements in a `Map`.

#### Real-World Applications
- **Information Retrieval**: Calculating similarity between documents represented as sparse vectors in high-dimensional space.
- **Recommendation Systems**: Measuring similarity between users or items for recommendations.
- **Machine Learning**: Sparse vectors are common in high-dimensional datasets for algorithms like support vector machines.
- **Graph Theory**: Analyzing connections in large sparse networks using adjacency matrices.
- **Scientific Computing**: Efficiently handling large matrices with many zero elements in simulations and computations.

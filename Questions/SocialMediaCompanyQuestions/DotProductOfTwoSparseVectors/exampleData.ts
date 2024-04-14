export const partialOverlapVectors = {
    vec1: [1, 0, 0, 2, 3],
    vec2: [0, 3, 0, 4, 0],
    expectedDotProduct: 8
};

export const noOverlapVectors = {
    vec1: [0, 1, 0, 0, 0],
    vec2: [0, 0, 0, 0, 2],
    expectedDotProduct: 0
};

export const fullOverlapVectors = {
    vec1: [1, 2, 3],
    vec2: [4, 5, 6],
    expectedDotProduct: 32
};

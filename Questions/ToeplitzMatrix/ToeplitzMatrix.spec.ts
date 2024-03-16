import isToeplitzMatrix from "./ToeplitzMatrix";

describe('isToeplitzMatrix', () => {
    test('returns true for a Toeplitz matrix', () => {
        const matrix = [
            [1,2,3,4],
            [5,1,2,3],
            [9,5,1,2]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(true);
    });

    test('returns false for a non-Toeplitz matrix', () => {
        const matrix = [
            [1,2,3,4],
            [5,1,9,3],
            [9,5,1,2]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(false);
    });

    test('returns true for a Toeplitz matrix with negative numbers', () => {
        const matrix = [
            [-1,2,3],
            [4,-1,2],
            [5,4,-1]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(true);
    });

    test('returns true for a single element matrix', () => {
        const matrix = [
            [1]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(true);
    });

    test('returns true for a matrix with one row', () => {
        const matrix = [
            [1,2,3,4,5]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(true);
    });

    test('returns true for a matrix with one column', () => {
        const matrix = [
            [1],
            [2],
            [3],
            [4]
        ];
        expect(isToeplitzMatrix(matrix)).toBe(true);
    });

    // Add additional tests for edge cases as needed
});

import findDiagonalOrder from "./DiagonalTraverse";

describe('findDiagonalOrder', () => {
    test('should correctly traverse a 3x3 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const expected = [1, 2, 4, 7, 5, 3, 6, 8, 9];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should correctly traverse a 2x2 matrix', () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        const expected = [1, 2, 3, 4];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should handle a single row matrix', () => {
        const matrix = [[1, 2, 3, 4]];
        const expected = [1, 2, 3, 4];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should handle a single column matrix', () => {
        const matrix = [
            [1],
            [2],
            [3],
            [4]
        ];
        const expected = [1, 2, 3, 4];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should return an empty array for an empty matrix', () => {
        const matrix: number[][] = [[]];
        const expected: number[] = [];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should correctly traverse a 4x2 matrix', () => {
        const matrix = [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8]
        ];
        const expected = [1, 2, 3, 5, 4, 6, 7, 8];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });

    test('should correctly traverse a 2x4 matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ];
        const expected = [1, 2, 5, 6, 3, 4, 7, 8];
        expect(findDiagonalOrder(matrix)).toEqual(expected);
    });
});
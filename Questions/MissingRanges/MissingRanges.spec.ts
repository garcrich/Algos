import findMissingRanges from "./MissingRanges";

describe('findMissingRanges', () => {
    test('handles an empty array', () => {
        expect(findMissingRanges([], 1, 10)).toEqual([[1, 10]]);
    });

    test('finds missing ranges in the middle of the array', () => {
        expect(findMissingRanges([1, 3, 7, 10], 1, 10)).toEqual([[2, 2], [4, 6], [8, 9]]);
    });

    test('finds missing ranges with lower and upper bounds', () => {
        expect(findMissingRanges([1, 2, 3, 7, 8], 0, 10)).toEqual([[0, 0], [4, 6], [9, 10]]);
    });

    test('no missing ranges', () => {
        expect(findMissingRanges([1, 2, 3, 4, 5], 1, 5)).toEqual([]);
    });

    test('missing ranges when nums has smaller values than lower', () => {
        expect(findMissingRanges([1, 2, 3], 4, 6)).toEqual([[4, 6]]);
    });

    test('handles large intervals', () => {
        expect(findMissingRanges([-1000000000, -9999, 0, 1, 2, 10, 100, 1000, 999999999, 1000000000], -1000000000, 1000000000))
        .toEqual([[-999999999, -10000], [-9998, -1], [3, 9], [11, 99], [101, 999], [1001, 999999998]]);
    });
});

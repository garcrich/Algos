import intervalIntersection from "./IntervalListIntersections";

describe('intervalIntersection', () => {
  test('should find overlapping intervals correctly', () => {
    expect(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]))
      .toEqual([[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]);
  });

  test('should return empty array if no intervals overlap', () => {
    expect(intervalIntersection([[1, 3], [5, 9]], [[10, 12]]))
      .toEqual([]);
  });

  test('should handle empty input lists', () => {
    expect(intervalIntersection([], [[1, 3], [4, 6]]))
      .toEqual([]);
    expect(intervalIntersection([[1, 3], [4, 6]], []))
      .toEqual([]);
  });

  test('should handle intervals that touch but do not overlap', () => {
    expect(intervalIntersection([[1, 2], [3, 4]], [[2, 3], [4, 5]]))
      .toEqual([[2, 2], [3, 3], [4, 4]]);
  });
});

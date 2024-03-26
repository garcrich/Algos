import findIntersectionValues from "./FindCommonElementsBetweenTwoArrays";

describe('findIntersectionValues', () => {
    test('should return correct counts for no intersections', () => {
      expect(findIntersectionValues([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
    });
  
    test('should return correct counts for all elements intersecting without duplicates', () => {
      expect(findIntersectionValues([1, 2, 3], [3, 2, 1])).toEqual([3, 3]);
    });
  
    test('should handle empty arrays', () => {
      expect(findIntersectionValues([], [])).toEqual([0, 0]);
    });
  
    test('should return correct counts with one array being empty', () => {
      expect(findIntersectionValues([1, 2, 3], [])).toEqual([0, 0]);
      expect(findIntersectionValues([], [1, 2, 3])).toEqual([0, 0]);
    });
  
    test('should return correct counts for arrays with one element each', () => {
      expect(findIntersectionValues([1], [1])).toEqual([1, 1]);
      expect(findIntersectionValues([1], [2])).toEqual([0, 0]);
    });
  
    test('should handle large arrays with mixed intersections', () => {
      expect(findIntersectionValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 11, 12, 13])).toEqual([3, 3]);
    });
  });
  
import findClosestElements from "./findKClosestElem";

describe('findClosestElements', () => {
  test('returns k elements closest to x, case 1', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
  });

  test('returns k elements closest to x, case 2', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
  });

  test('handles x being greater than all elements', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 2, 10)).toEqual([4, 5]);
  });

  test('handles x being less than all elements', () => {
    expect(findClosestElements([5, 6, 7, 8, 9], 3, 1)).toEqual([5, 6, 7]);
  });

  test('handles x exactly in the middle of array', () => {
    expect(findClosestElements([1, 3, 5, 7, 9], 3, 5)).toEqual([3, 5, 7]);
  });

  test('prefers smaller elements when distances are equal', () => {
    expect(findClosestElements([1, 4, 6, 8], 3, 5)).toEqual([4, 6, 8]);
  });

  test('returns all elements if k equals array length', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 5, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles array with one element', () => {
    expect(findClosestElements([1], 1, 0)).toEqual([1]);
  });

  test('handles k being larger than array length', () => {
    expect(findClosestElements([2, 3], 5, 3)).toEqual([2, 3]);
  });
});

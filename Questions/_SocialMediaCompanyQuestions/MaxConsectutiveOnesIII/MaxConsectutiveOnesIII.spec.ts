// maxConsecutiveOnesIII.test.ts
import  longestOnes from './MaxConsectutiveOnesIII';

describe('longestOnes', () => {
  test('example 1', () => {
    const nums = [1,1,1,0,0,0,1,1,1,1,0];
    const k = 2;
    const output = 6;
    expect(longestOnes(nums, k)).toEqual(output);
  });

  test('example 2', () => {
    const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
    const k = 3;
    const output = 10;
    expect(longestOnes(nums, k)).toEqual(output);
  });

  test('all ones', () => {
    const nums = [1,1,1,1,1];
    const k = 2;
    const output = 5; // No need to flip, all are 1s
    expect(longestOnes(nums, k)).toEqual(output);
  });

  test('all zeros', () => {
    const nums = [0,0,0,0];
    const k = 2;
    const output = 2; // Can only flip two zeros
    expect(longestOnes(nums, k)).toEqual(output);
  });

  test('zero flips allowed', () => {
    const nums = [1,0,1,1,0,1];
    const k = 0;
    const output = 2; // No flips allowed, max consecutive ones is 2
    expect(longestOnes(nums, k)).toEqual(output);
  });
});

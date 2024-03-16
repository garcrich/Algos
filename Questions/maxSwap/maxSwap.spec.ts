import maximumSwap from "./maxSwap";

describe('maximumSwap', () => {
  test('swaps to create the largest number from a simple number', () => {
    expect(maximumSwap(2736)).toBe(7236);
  });

  test('returns the same number when no swap can increase the value', () => {
    expect(maximumSwap(9973)).toBe(9973);
  });

  test('correctly swaps numbers with multiple possible swaps', () => {
    expect(maximumSwap(98368)).toBe(98863);
  });

  test('handles single-digit numbers correctly', () => {
    expect(maximumSwap(9)).toBe(9);
  });

  test('handles numbers with repeated digits', () => {
    expect(maximumSwap(1993)).toBe(9913);
  });

  test('swaps digits early in the number for maximum effect', () => {
    expect(maximumSwap(123456)).toBe(623451);
  });

  test('swaps only once to achieve the maximum number', () => {
    expect(maximumSwap(983681)).toBe(988631);
  });

  test('handles large numbers correctly', () => {
    expect(maximumSwap(123456789)).toBe(923456781);
  });
});

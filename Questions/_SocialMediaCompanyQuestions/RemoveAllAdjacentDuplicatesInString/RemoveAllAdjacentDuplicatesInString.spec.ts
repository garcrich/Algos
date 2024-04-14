// Assuming removeDuplicates is exported from removeDuplicates.ts
import removeDuplicates from './RemoveAllAdjacentDuplicatesInString';

describe('removeDuplicates', () => {
  test('removes single set of duplicates', () => {
    expect(removeDuplicates("abbaca")).toEqual("ca");
  });

  test('removes multiple sets of duplicates', () => {
    expect(removeDuplicates("azxxzy")).toEqual("ay");
  });

  test('returns empty string when all characters are duplicates', () => {
    expect(removeDuplicates("aabbcc")).toEqual("");
  });

  test('handles string with no duplicates', () => {
    expect(removeDuplicates("abc")).toEqual("abc");
  });

  test('processes string with duplicates at the start and end', () => {
    expect(removeDuplicates("aabccbaa")).toEqual("");
  });

  test('returns the original string when it is empty', () => {
    expect(removeDuplicates("")).toEqual("");
  });
  test('handles single character strings', () => {
    expect(removeDuplicates("a")).toEqual("a");
  });
});

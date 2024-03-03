import customSortString from "./CustomSortString";

describe('customSortString', () => {
    test('sorts string based on order', () => {
        expect(customSortString("cba", "abcd")).toEqual("cbad");
    });

    test('handles characters in s not present in order', () => {
        expect(customSortString("cba", "abcd")).toEqual("cbad");
    });

    test('handles characters in order not present in s', () => {
        expect(customSortString("cbafg", "abcd")).toEqual("cbad");
    });

    test('handles empty order', () => {
        expect(customSortString("", "abcd")).toEqual("abcd");
    });

    test('handles empty s', () => {
        expect(customSortString("cba", "")).toEqual("");
    });

    test('order and s are the same string', () => {
        expect(customSortString("abc", "abc")).toEqual("abc");
    });

    test('s contains characters not in order, appended at the end', () => {
        expect(customSortString("cba", "abcdxyz")).toEqual("cbadxyz");
    });
});

import validWordAbbreviation from "./validWordAbbreviation";
import { substitution, fullSub, invalidNums, shortAbbr, emptyStr } from "./examplesData";

describe('validWordAbbreviation', () => {
    test('returns true for empty string abbreviation', () => {
        expect(validWordAbbreviation(emptyStr.word, emptyStr.abbr)).toBe(true);
    });

    test('returns true for valid abbreviation of substitution', () => {
        expect(validWordAbbreviation(substitution.word, substitution.abbr)).toBe(true);
    });

    test('returns true for full word abbreviation of substitution', () => {
        expect(validWordAbbreviation(fullSub.word, fullSub.abbr)).toBe(true);
    });

    test('returns false for invalid numeric abbreviation', () => {
        expect(validWordAbbreviation(invalidNums.word, invalidNums.abbr)).toBe(false);
    });

    test('returns false for abbreviation shorter than word', () => {
        expect(validWordAbbreviation(shortAbbr.word, shortAbbr.abbr)).toBe(false);
    });
});

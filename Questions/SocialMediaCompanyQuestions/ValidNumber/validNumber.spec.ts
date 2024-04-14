import isNumber from "./ValidNumber";

describe('isNumber function tests', () => {
    test('validates positive integers', () => {
      expect(isNumber('42')).toBe(true);
    });
  
    test('validates negative integers', () => {
      expect(isNumber('-42')).toBe(true);
    });
  
    test('validates positive decimal numbers', () => {
      expect(isNumber('3.14')).toBe(true);
    });
  
    test('validates negative decimal numbers', () => {
      expect(isNumber('-3.14')).toBe(true);
    });
  
    test('validates numbers with positive exponent', () => {
      expect(isNumber('5e2')).toBe(true);
    });
  
    test('validates numbers with negative exponent', () => {
      expect(isNumber('5e-2')).toBe(true);
    });
  
    test('validates numbers with positive exponent and sign', () => {
      expect(isNumber('-5e+2')).toBe(true);
    });
})
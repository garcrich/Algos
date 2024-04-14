import myPow from "./PowxN";
describe('pow function tests', () => {
    test('2^3 = 8', () => {
        expect(myPow(2, 3)).toBe(8);
    });

    test('2^0 = 1', () => {
        expect(myPow(2, 0)).toBe(1);
    });

    test('2^-2 = 0.25', () => {
        expect(myPow(2, -2)).toBeCloseTo(0.25);
    });

    test('(-2)^2 = 4', () => {
        expect(myPow(-2, 2)).toBe(4);
    });

    test('(-2)^3 = -8', () => {
        expect(myPow(-2, 3)).toBe(-8);
    });

    test('10^1 = 10', () => {
        expect(myPow(10, 1)).toBe(10);
    });

    test('1^10 = 1 (any number to the power of 0 is 1)', () => {
        expect(myPow(1, 10)).toBe(1);
    });

    test('0^5 = 0 (0 to any positive power is 0)', () => {
        expect(myPow(0, 5)).toBe(0);
    });

    test('5^0 = 1 (any non-zero number to the power of 0 is 1)', () => {
        expect(myPow(5, 0)).toBe(1);
    });
});

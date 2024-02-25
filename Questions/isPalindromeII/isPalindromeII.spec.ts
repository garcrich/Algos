import validPalindrome from './isPalindromeII'

describe('validPalindrome', () => {
    test('verify is palindrome if at most one char is deleted', () => {
        expect(validPalindrome('')).toBe(true);
        expect(validPalindrome('aba')).toBe(true)
        expect(validPalindrome('zayyyyz')).toBe(true)
        expect(validPalindrome('abbcbaa')).toBe(false)
        expect(validPalindrome('racecar')).toBe(true)
    })
})
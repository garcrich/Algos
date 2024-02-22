import minRemoveToMakeValid from "./MinimumRemoveToMakeValidParentheses"

describe('minRemoveToMakeValid', () => {
    test('removes the minimum number of parentheses to make the string valid', () => {
        expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
        expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
        expect(minRemoveToMakeValid("))((")).toBe("")
    })
})
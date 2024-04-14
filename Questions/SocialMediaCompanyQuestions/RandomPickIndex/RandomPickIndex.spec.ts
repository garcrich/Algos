import RandomPickIndex from "./RandomPickIndex";

describe('RandomPickIndex', () => {
    const solution = new RandomPickIndex([1,2,3,3,3])
    test('select 3 always returns within 2-4 range', () => {
        expect(solution.pick(3)).toBeGreaterThanOrEqual(2)
        expect(solution.pick(3)).toBeLessThanOrEqual(4)
    })

    test('select 1 always returns index 0', () => {
        expect(solution.pick(1)).toEqual(0)
    })
})
import calculate from './BasicCalculatorII'

describe('basic calculate II', () => {
    test('addition with multiplication', () => {
        expect(calculate("3+2*2")).toEqual(7)
    })
    test('division', () => {
        expect(calculate("3/2")).toEqual(1)
    })
    test('addition with division', () => {
        expect(calculate("3+5 / 2")).toEqual(5)
    })
})

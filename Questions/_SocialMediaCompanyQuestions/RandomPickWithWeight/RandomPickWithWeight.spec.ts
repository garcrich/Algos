import Solution from "./RandomPickWithWeight";


describe('PickRandomWeight', () => {
    test('single weight', () => {
        const solution = new Solution([1])
        expect(solution.pickIndex()).toBe(0)
    })

    test('uniform weight', () => {
        const solution = new Solution([1,1,1,1])
        const counts = [0,0,0,0]
        const iterations = 1000
        for(let i = 0; i < iterations; i++) {
            counts[solution.pickIndex()] += 1
        }
        counts.forEach(count => {
            expect(count).toBeGreaterThan(0)
        })
    })

    test('large weights', () => {
        const solution = new Solution([1000, 1]);
        const counts = [0, 0];
        const iterations = 1000;
        for (let i = 0; i < iterations; i++) {
          counts[solution.pickIndex()] += 1;
        }
        expect(counts[0]).toBeGreaterThan(counts[1]); // Index 0 should be picked significantly more often
      });
})
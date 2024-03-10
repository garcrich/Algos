import subarraySum from "./subarraySum";


describe('subarraySum', () => {
    it('should return the correct number of subarrays that sum to k', () => {
        expect(subarraySum([1,1,1], 2)).toBe(2)
        expect(subarraySum([1,2,3], 3)).toBe(2)
        expect(subarraySum([1], 0)).toBe(0)
    })

    it('show handle negative numbers correctly', () => {
        expect(subarraySum([-1,-1,1],0)).toBe(1)
    })

    it('should return 0 fro empty array regarless of k', () => {
        expect(subarraySum([], 10)).toBe(0)
    })

    it('should work with a single element array when the element equals k', () => {
        expect(subarraySum([5], 5)).toBe(1)
    })
})
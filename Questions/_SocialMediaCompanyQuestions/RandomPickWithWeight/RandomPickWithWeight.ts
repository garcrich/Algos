export default class Solution {
    private prefixSums: number[]
    private totalSum: number

    constructor(w: number[]) {
        this.prefixSums = []
        let prefixSum = 0
        for (let weight of w) {
            prefixSum += weight;
            this.prefixSums.push(prefixSum)
        }
        this.totalSum = prefixSum
    }

    pickIndex(): number {
        const target = Math.floor(Math.random() * this.totalSum) + 1
        let low = 0
        let high = this.prefixSums.length - 1

        while (low < high) {
            const mid = Math.floor((low + high) / 2)
            if (this.prefixSums[mid] < target) {
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }
}

let solution = new Solution([1, 3]);

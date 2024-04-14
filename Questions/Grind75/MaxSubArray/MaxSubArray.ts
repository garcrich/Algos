function maxSubArray(nums: number[]): number {
    let currentMax = -Infinity
    let currentSum = 0

    for(const num of nums) {
        currentSum += num
        currentMax = Math.max(currentMax,currentSum)

        if(currentSum < 0) {
            currentSum = 0
        }
    }

    return currentMax
};
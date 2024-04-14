export default function longestOnes(nums: number[], k: number): number {
    let left = 0,
        right = 0
    let maxLen = 0
    let zeroCount = 0

    while (right < nums.length) {
        if(nums[right] === 0) {
            zeroCount++
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--
            }
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }
    return maxLen
};
export default  function (nums: number[], k: number): number {
    let count = 0
    let currentSum = 0
    const prefixSums: Map<number, number> = new Map([[0,1]])

    for(let  num of nums) {
        currentSum += num

        if (prefixSums.has(currentSum - k )) {
            count += prefixSums.get(currentSum - k)!
        }

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1)


    }
    return count;
}
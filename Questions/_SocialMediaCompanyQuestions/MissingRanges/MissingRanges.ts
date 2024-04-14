export default function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
    const missingRanges: number[][] = [];
    let previousNumber = lower - 1;

    // Simplifies the loop by avoiding special handling for the last element
    nums.push(upper + 1); 

    for (const currentNumber of nums) {
        // Check if there is at least one number missing between previousNumber and currentNumber
        if (previousNumber + 2 <= currentNumber) { 
            missingRanges.push([previousNumber + 1, currentNumber - 1]);
        }
        previousNumber = currentNumber;
    }

    return missingRanges;
}

function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
    let result: number[][] = [];
    let mergeInterval = newInterval; // Use mergeInterval to handle changes.

    for (let currentInterval of intervals) {
        if (currentInterval[1] < mergeInterval[0]) {
            // The current currentInterval is completely to the left
            // of the mergeInterval
            result.push(currentInterval);
        } else if (mergeInterval[1] < currentInterval[0]) {
            // The mergeInterval is completely to the right 
            //of the current currentInterval
            result.push(mergeInterval);
            // Update mergeInterval to the next one
            // that hasn't been added yet.
            mergeInterval = currentInterval; 
        } else {
            // There is an overlap, so we merge intervals
            mergeInterval = [
                Math.min(currentInterval[0], mergeInterval[0]), 
                Math.max(currentInterval[1], mergeInterval[1])
            ];
        }
    }
    
    // After the loop, push the last updated 
    //mergeinterval to the result.
    result.push(mergeInterval);
    return result;
}
const intervals = [[1,2], [3,5], [6,7]]
const newInterval = [1,3]

const result = insertInterval(intervals, newInterval)
console.log(result)
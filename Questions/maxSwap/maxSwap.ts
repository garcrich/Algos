export default function maximumSwap(num: number): number {
    //create array to iterate
    const digits = num.toString().split("");

    // define our state variables
    let max = -1, 
        maxIdx = -1, 
        leftIdx = -1, 
        rightIdx = -1;

    //iterate over digits array to find the largest number
    //start at the one's place
    for(let i = digits.length - 1; i >= 0; i--) {
        const digit = Number(digits[i]);

        //compare current digit to max 
        if(digit > max) {
            //set max to digit and track it's index
            max = digit
            maxIdx = i
        } else if(digit < max) {
            leftIdx = i 
            rightIdx = maxIdx
        }
    }

    // if the left index was never changed
    // just return the number as it was
    if(leftIdx === -1) {
        return num
    }

    //swap the number at the left index with the right to get the highest number
    [digits[leftIdx],digits[rightIdx]] = [digits[rightIdx],digits[leftIdx]];
    
    return Number(digits.join(""));
};
function maximumSwap(num: number): number {
    const digits = num.toString().split("");
    let max = -1, 
        maxIdx = -1, 
        leftIdx = -1, 
        rightIdx = -1;

    for(let i = digits.length - 1; i >= 0; i--) {
        const digit = parseInt(digits[i]);

        if(digit > max) max = digit, maxIdx = i;

        else if(digit < max) leftIdx = i, rightIdx = maxIdx;
    }
    if(leftIdx === -1) return num;
    [digits[leftIdx],digits[rightIdx]] = [digits[rightIdx],digits[leftIdx]];
    return Number(digits.join(""));
};
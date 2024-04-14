function findRLEArray(encoded1: number[][], encoded2: number[][]): number[][] {
    let index1 = 0,
        index2 = 0

    const result: number[][] = []

    while(index1 < encoded1.length && index2 < encoded2.length) {
        const [val1, freq1] = encoded1[index1];
        const [val2, freq2] = encoded2[index2];
        const product = val1 * val2
        const minFreq = Math.min(freq1, freq2)

        if(result.length > 0 && result[result.length - 1][0] === product) {
            result[result.length - 1][1] += minFreq;
        } else {
            result.push([product, minFreq])
        }

        encoded1[index1][1] -= minFreq
        encoded2[index2][1] -= minFreq

        if(encoded1[index1][1] === 0) index1++
        if(encoded2[index2][1] === 0) index2++
    }
    return result
};
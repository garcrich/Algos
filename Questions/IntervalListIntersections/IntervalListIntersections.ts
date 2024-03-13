export default function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let firstIdx = 0;
    let secondIdx = 0;
    const intersections: number[][] = []

    while(firstIdx < firstList.length && secondIdx < secondList.length) {
        const start = Math.max(firstList[firstIdx][0], secondList[secondIdx][0])
        const end = Math.min(firstList[firstIdx][1], secondList[secondIdx][1])

        if (start <= end) {
            intersections.push([start, end])
        }

        if(firstList[firstIdx][1] < secondList[secondIdx][1]) {
            firstIdx++
        } else {
            secondIdx++
        }
    }
    return intersections
};
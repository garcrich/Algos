export default function minMeetingRooms(intervals: number[][]): number {
    intervals.sort((a,b) => a[0] - b[0])

    const endTimes = []

    for(const [start, end] of intervals) {
        if(endTimes.length === 0 || start < endTimes[0]) {
            endTimes.push(end)
        } else {
            endTimes.shift()
            endTimes.push(end)
        }
        endTimes.sort((a,b) => a -b)
    }

    return endTimes.length
};
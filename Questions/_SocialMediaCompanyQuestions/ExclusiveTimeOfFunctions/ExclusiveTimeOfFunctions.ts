export default function exclusiveTime(n: number, logs: string[]): number[] {
    const exclusiveTimes: number[] = new Array(n).fill(0);
    const stack: [number, number][] = [];

    logs.forEach(log => {
        const [idStr, action, timeStr] = log.split(':');
        const id = Number(idStr);
        const time = Number(timeStr);

        if (action === 'start') {
            stack.push([id, time]);
        } else {
            const startTime = stack.pop()![1];
            const duration = time - startTime + 1; // +1 because end time is inclusive.
            exclusiveTimes[id] += duration;

            if (stack.length > 0) {
                exclusiveTimes[stack[stack.length - 1][0]] -= duration;
            }
        }
    });

    return exclusiveTimes;
}

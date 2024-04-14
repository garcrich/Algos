export default class MovingAverage {
    size: number;
    movingAverageSum = 0;
    slidingWindow:number[] = [];

    constructor(size: number) {
        this.size = size    
    }

    next(val: number): number {

        if(this.slidingWindow.length >= this.size) {
            this.movingAverageSum -= this.slidingWindow.shift()!
        }

        this.slidingWindow.push(val)
        this.movingAverageSum += val

        return this.movingAverageSum / this.slidingWindow.length
    }
}
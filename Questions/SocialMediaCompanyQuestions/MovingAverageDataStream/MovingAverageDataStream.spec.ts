import MovingAverage from "./MovingAverageDataStream";

describe('MovingAverage', () => {
    test("should return the correct averages wtesth sequential inputs", () => {
        const movingAverage = new MovingAverage(3);
        expect(movingAverage.next(1)).toEqual(1.0); // [1]
        expect(movingAverage.next(10)).toEqual(5.5); // [1, 10]
        expect(movingAverage.next(3)).toEqual(4.666666666666667); // [1, 10, 3]
        expect(movingAverage.next(5)).toEqual(6.0); // [10, 3, 5]
    });

    test("should handle window size of 1 correctly", () => {
        const movingAverage = new MovingAverage(1);
        expect(movingAverage.next(4)).toEqual(4.0); // [4]
        expect(movingAverage.next(7)).toEqual(7.0); // [7]
    });

    test("should handle a large number of inputs correctly", () => {
        const size = 5;
        const movingAverage = new MovingAverage(size);
        const testValues = Array.from({ length: 1000 }, (_, i) => i + 1); // 1 to 1000
        let sum = 0;

        testValues.forEach((val, index) => {
            sum += val;
            if (index >= size) {
                sum -= testValues[index - size];
            }
            const expectedAverage = sum / Math.min(index + 1, size);
            expect(movingAverage.next(val)).toEqual(expectedAverage);
        });
    });
})
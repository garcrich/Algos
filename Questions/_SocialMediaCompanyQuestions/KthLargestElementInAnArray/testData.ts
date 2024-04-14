interface TestCase {
    nums: number[];
    k: number;
}

export const mixedValuesMidK: TestCase = {
    nums: [17, 86, 66, 26, 48, 18, 55, 43, 73],
    k: 7
};

export const smallArrayLowK: TestCase = {
    nums: [82, 63],
    k: 2
};

export const variedValuesMidHighK: TestCase = {
    nums: [83, 94, 47, 88, 3, 77, 51],
    k: 5
};

export const highValuesHighK: TestCase = {
    nums: [29, 56, 27, 5, 38, 87, 99],
    k: 7
};

export const averageValuesLowK: TestCase = {
    nums: [39, 7, 56, 24, 13],
    k: 4
};

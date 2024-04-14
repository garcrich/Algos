export default class RandomPickIndex {
    numsMap: Map<number, number[]>;

    constructor(nums: number[]) {
        this.numsMap = new Map()

        nums.forEach((num, index) => {
            if(!this.numsMap.has(num)) {
                this.numsMap.set(num, [])
            }
            this.numsMap.get(num)!.push(index);
        });
    }

    pick(target: number): number {
        const indices = this.numsMap.get(target) || [];
        const randomIndex = Math.floor(Math.random() * indices.length)

        return indices[randomIndex]
    }
}
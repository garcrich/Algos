
export default class SparseVector {
    private nonZeroVals: Map<number,number>


    constructor(vals:number[]) {
        this.nonZeroVals = new Map()

        vals.forEach((val,idx) => {
            if(val !== 0) {
                this.nonZeroVals.set(idx,val)
            }
        })
    }

    dotProduct(vec: SparseVector): number {
        let sum = 0

        for(let [idx,val] of vec.nonZeroVals) {
            if(this.nonZeroVals.has(idx))
                sum += this.nonZeroVals.get(idx)! * val
        }

        return sum
    }
}
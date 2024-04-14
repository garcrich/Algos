import { partialOverlapVectors, noOverlapVectors, fullOverlapVectors } from "./exampleData";
import SparseVector from './DotProductOfTwoSparseVectors'


describe('Sparse Vector', () => {
    it('should handle partial overlap vectors', () => {
        let v1 = new SparseVector(partialOverlapVectors.vec1)
        let v2 = new SparseVector(partialOverlapVectors.vec2)
        expect(v1.dotProduct(v2)).toEqual(partialOverlapVectors.expectedDotProduct)
    })

    it('should handle noOverlapVectors', () => {
        let v1 = new SparseVector(noOverlapVectors.vec1)
        let v2 = new SparseVector(noOverlapVectors.vec2)

        expect(v1.dotProduct(v2)).toEqual(noOverlapVectors.expectedDotProduct)
    })

    it('should handle full overlap vectors', () => {
        let v1 = new SparseVector(fullOverlapVectors.vec1)
        let v2 = new SparseVector(fullOverlapVectors.vec2)

        expect(v1.dotProduct(v2)).toEqual(fullOverlapVectors.expectedDotProduct)
    })
})
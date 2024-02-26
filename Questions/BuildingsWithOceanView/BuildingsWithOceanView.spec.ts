import findBuildings from "./BuildingsWithOceanView";

describe('Buildings with an ocean view', () => {
    test('checks to see which building have view', () => {
        expect(findBuildings([4,2,3,1])).toBe([0,2,3])
    })
})
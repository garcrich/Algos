export default function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const nums1Map = new Map<number,number>()
    const nums2Map = new Map<number,number>()
    const intersectionCounts: [number,number] = [0,0]

    for(const num of nums1) {
        if(nums1Map.has(num)) {
            nums1Map.set(num, nums1Map.get(num)! + 1)
        } else {
            nums1Map.set(num, 1)
        }
    }

    for(const num of nums2) {
        if(nums2Map.has(num)) {
            nums2Map.set(num, nums2Map.get(num)! + 1)
        } else {
            nums2Map.set(num, 1)
        }
    }

    for(const [num, count] of nums1Map) {
        if(nums2Map.has(num)) {
            intersectionCounts[0] += count
        }
    }

    for(const [num, count] of nums2Map) {
        if(nums1Map.has(num)) {
            intersectionCounts[1] += count
        }
    }
    return intersectionCounts
}
export default function findClosestElements(arr: number[], k: number, x: number): number[] {
    let mid = _binarySearch(arr, x)

    let left = mid - 1,
        right = mid

    while(k > 0) {
        if(left < 0) {
            right++
        } else if (
            right >= arr.length ||
            x - arr[left] <= arr[right] - x
        ) {
            left--
        } else {
            right++
        }
        k--
    }

    return arr.slice(left + 1, right)
}

function _binarySearch(arr:number[],target:number): number {
    let low = 0,
        high = arr.length - 1

    while(low < high) {
        const mid = Math.floor((low + high) /2)

        if(arr[mid] < target) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low

}
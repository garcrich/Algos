import MaxHeap from "./maxHeap";

function findKthLargest(nums: number[], k: number): number {
    // Initialize a max heap with the given numbers.
    let maxHeap = new MaxHeap(nums);

    // Variable to store the result after k pop operations.
    let result: number = -Infinity;

    // Pop k times to get the kth largest element.
    for (let i = 0; i < k; i++) {
        result = maxHeap.pop();
    }
    
    return result;
};
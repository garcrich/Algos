export default class MaxHeap {
    private heap: number[];

    constructor(arr: number[]) {
        this.heap = [];
        this.buildMaxHeap(arr);
    }

    public pop(): number {
        if (this.size() === 0) {
            throw new Error("Heap is empty");
        }
        const maxElement = this.heap[0];
        // Set the first element to the last element
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return maxElement;
    }

    private heapifyDown(index: number): void {
        let largest = index;
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);

        if (left < this.size() && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.size() && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    private leftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    private rightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    private size(): number {
        return this.heap.length;
    }

    private buildMaxHeap(arr: number[]): void {
        for (const num of arr) {
            this.heap.push(num);
            this.heapifyUp(this.size() - 1);
        }
    }

    private heapifyUp(index: number): void {
        let current = index;
        let parent = this.parentIndex(index);

        while (current > 0 && this.heap[current] > this.heap[parent]) {
            this.swap(current, parent);
            current = parent;
            parent = this.parentIndex(current);
        }
    }

    private parentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }
}

function findKthLargest(nums: number[], k: number): number {
    const maxHeap = new MaxHeap(nums);
    for (let i = 1; i < k; i++) {
        maxHeap.pop();
    }
    return maxHeap.pop();
}

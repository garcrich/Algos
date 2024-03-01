export default class Heap {
    protected items: number[] = [];

    constructor(protected comparator: (a: number, b: number) => boolean) {}

    // Insert a value into the heap
    insert(value: number): void {
        this.items.push(value);
        this.heapifyUp();
    }

    // Peek at the root value of the heap without removing it
    peek(): number | null {
        if (this.items.length === 0) return null;
        return this.items[0];
    }

    // Remove the root value of the heap and return it
    remove(): number | null {
        if (this.items.length === 0) return null;
        const root = this.items[0];
        if (this.items.length > 1) {
            this.items[0] = this.items.pop()!;
            this.heapifyDown();
        } else {
            this.items.pop();
        }
        return root;
    }

    // Adjust an element upwards in the heap to maintain heap property
    private heapifyUp(): void {
        let index = this.items.length - 1;
        while (this.hasParent(index) && !this.comparator(this.parent(index), this.items[index])) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    // Adjust an element downwards in the heap to maintain heap property
    private heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerOrLargerChildIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.comparator(this.rightChild(index), this.leftChild(index))) {
                smallerOrLargerChildIndex = this.rightChildIndex(index);
            }

            if (this.comparator(this.items[index], this.items[smallerOrLargerChildIndex])) {
                break;
            } else {
                this.swap(index, smallerOrLargerChildIndex);
            }
            index = smallerOrLargerChildIndex;
        }
    }

    // Utility methods
    protected leftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    protected rightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    protected parentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    protected hasLeftChild(index: number): boolean {
        return this.leftChildIndex(index) < this.items.length;
    }

    protected hasRightChild(index: number): boolean {
        return this.rightChildIndex(index) < this.items.length;
    }

    protected hasParent(index: number): boolean {
        return this.parentIndex(index) >= 0;
    }

    protected leftChild(index: number): number {
        return this.items[this.leftChildIndex(index)];
    }

    protected rightChild(index: number): number {
        return this.items[this.rightChildIndex(index)];
    }

    protected parent(index: number): number {
        return this.items[this.parentIndex(index)];
    }

    protected swap(indexOne: number, indexTwo: number): void {
        [this.items[indexOne], this.items[indexTwo]] = [this.items[indexTwo], this.items[indexOne]];
    }
}

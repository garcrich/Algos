import TreeNode from "@cds/TreeNode";
import BSTIterator from "./BSTIterator";

function createBSTFromArray(elements: Array<number | null>): TreeNode | null {
    if (elements.length === 0 || elements[0] === null) return null;

    const nodes: (TreeNode | null)[] = elements.map((val) => val !== null ? new TreeNode(val) : null);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftIdx = 2 * i + 1;
            const rightIdx = 2 * i + 2;
            nodes[i]!.left = leftIdx < nodes.length ? nodes[leftIdx] : null;
            nodes[i]!.right = rightIdx < nodes.length ? nodes[rightIdx] : null;
        }
    }
    return nodes[0];
}

describe('BSTIterator', () => {
    test('Iterates over BST in the correct order', () => {
        const root = createBSTFromArray([7, 3, 15, null, null, 9, 20]);
        const iterator = new BSTIterator(root);
        const results: number[] = [];
        while (iterator.hasNext()) {
            results.push(iterator.next());
        }
        expect(results).toEqual([3, 7, 9, 15, 20]);
    });

    test('Correctly reports hasNext when more elements are present', () => {
        const root = createBSTFromArray([7, 3, 15, null, null, 9, 20]);
        const iterator = new BSTIterator(root);
        expect(iterator.hasNext()).toBeTruthy(); // Before any next() call
        iterator.next(); // 3
        iterator.next(); // 7
        expect(iterator.hasNext()).toBeTruthy(); // Still elements left
    });

    test('Correctly reports hasNext as false when no more elements', () => {
        const root = createBSTFromArray([2]);
        const iterator = new BSTIterator(root);
        iterator.next(); // 2
        expect(iterator.hasNext()).toBeFalsy(); // No elements left
    });
});
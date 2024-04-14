import { createExampleTree1, createExampleTree2 } from './createTrees';
import verticalOrder from './BinaryTreeVerticalOrderTraversal';

describe('vertifcalOrder', () => {
    describe('verticalOrder', () => {
        test('Is empty', () => {
            expect(verticalOrder(null)).toEqual([])
        })

        test('Example 1', () => {
            const tree = createExampleTree1();
            expect(verticalOrder(tree)).toEqual([[9], [3, 15], [20], [7]]);
        });
    
        test('Example 2', () => {
            const tree = createExampleTree2();
            expect(verticalOrder(tree)).toEqual([[4], [9], [3, 0, 1], [8], [7]]);
        });
    });
    
})
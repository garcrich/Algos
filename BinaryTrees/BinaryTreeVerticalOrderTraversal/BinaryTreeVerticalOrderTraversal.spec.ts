import TreeNode from '@cds/TreeNode'
import verticalOrder from './BinaryTreeVerticalOrderTraversal';

describe('vertifcalOrder', () => {
    test('should return the vertical order traversal of a binary tree', () => {
        const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        expect(verticalOrder(root)).toEqual([[9], [3,15], [20], [7]]);
    });

    // More tests to follow
})
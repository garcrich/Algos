import TreeNode from "@cds/TreeNode";
import rangeSumOfBST from "./RangeSumOfBST";

describe('RangeSumOfBST', () => {
    const root = new TreeNode(4)
    root.left = new TreeNode(3)
    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(2)
    root.right = new TreeNode(5)

    test('handles empty tree', () => {
        expect(rangeSumOfBST(null,1,3)).toEqual(0);
    });
    test('range outside tree values returns 0', () => {
        const root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        expect(rangeSumOfBST(root,20,30)).toEqual(0);
    });
    
    
    test('sums up nums between 2 through 4', () => {
        expect(rangeSumOfBST(root,2,4)).toEqual(9)
    })
    test('sums up 1 through 3', () => {
        expect(rangeSumOfBST(root,1,3)).toEqual(6)
    })
    test('sums up 4 through 5', () => {
        expect(rangeSumOfBST(root,4,5)).toEqual(9)
    })

})
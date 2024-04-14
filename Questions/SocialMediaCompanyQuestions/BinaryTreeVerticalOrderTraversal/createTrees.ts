import TreeNode from '@cds/TreeNode'

export function createExampleTree1(): TreeNode {
    return new TreeNode(
        3, 
        new TreeNode(9), 
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
}

export function createExampleTree2(): TreeNode {
    return new TreeNode(
        3, 
        new TreeNode(9, new TreeNode(4), new TreeNode(0)), 
        new TreeNode(8, new TreeNode(1), new TreeNode(7))
    );
}
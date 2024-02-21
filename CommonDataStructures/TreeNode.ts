class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val: number, 
        left: TreeNode | null = null, 
        right: TreeNode | null = null
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export default TreeNode;
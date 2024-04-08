import TreeNode from "@cds/TreeNode"

export default class BSTIterator {
    private stack: TreeNode[]

    constructor(root: TreeNode | null) {
        this.stack = []
        this._leftmostInorder(root)
    }

    private _leftmostInorder(node: TreeNode | null) {
        while(node !== null) {
            this.stack.push(node)
            node = node.left
        }
    }

    next() : number {
        const topNode = this.stack.pop()

        if(topNode!.right !== null) {
            this._leftmostInorder(topNode!.right)
        }
        return topNode!.val
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}
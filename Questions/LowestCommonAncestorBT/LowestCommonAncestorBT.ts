import TreeNode from '@cds/TreeNode'

export class TreeNodeWithParent extends TreeNode {
    parent: TreeNodeWithParent | null

    constructor(val?: number, parent?: TreeNodeWithParent | null) {
        super(val===undefined ? 0 : val)
        this.parent = (parent === undefined ? null: parent)
    }
}

export default function lowestCommonAncestor(p: TreeNodeWithParent | null, q: TreeNodeWithParent | null): TreeNodeWithParent | null {
    let depthP: TreeNodeWithParent | null = p;
    let depthQ: TreeNodeWithParent | null = q;

    while(depthP !== depthQ) {
        depthP = depthP === null ? q : depthP.parent
        depthQ = depthQ === null ? p : depthQ.parent
    }
    return depthP
}
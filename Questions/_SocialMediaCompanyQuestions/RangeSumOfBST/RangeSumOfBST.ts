import TreeNode from "@cds/TreeNode";

export default function rangeSumOfBST(root: TreeNode | null, low: number, high: number):number {
    let sum = 0

    function dfs(node: TreeNode | null) {
        if(!node) return

        dfs(node.left)

        dfs(node.right)

        if(node.val >= low && node.val <= high)
            sum += node.val
    }

    dfs(root)

    return sum
}
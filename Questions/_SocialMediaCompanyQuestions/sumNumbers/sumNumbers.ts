import TreeNode
 from "@cds/TreeNode"
export default function sumNumbers(root: TreeNode | null): number {
    let sum = 0

    function dfs(node: TreeNode|null, currentNumber: number) {
        if(node === null) return

        let nextNumber = currentNumber * 10 + node.val

        if(node.left === null && node.right === null) {
            sum += nextNumber
            return;
        }

        if(node.left !== null) {
            dfs(node.left, nextNumber)
        }

        if(node.right !== null) {
            dfs(node.right, nextNumber)
        }
    }
    dfs(root, 0)

    return sum
};
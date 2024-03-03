import TreeNode from "@cds/TreeNode";

export default function treeToDoublyList(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let head: TreeNode | null = null;
    let prev: TreeNode | null = null;

    const inorder = (node: TreeNode | null) => {
        if (!node) return

        inorder(node.left)

        if(prev) {
            prev.right = node
            node.left = prev
        } else {
            head = node
        }
        prev = node

        inorder(node.right)
    }

    inorder(root)

    if (head && prev) {
        head.left! = prev
        prev.right = head 
    }
    return head;

}
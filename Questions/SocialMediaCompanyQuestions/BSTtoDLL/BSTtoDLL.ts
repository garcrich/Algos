import TreeNode from "@cds/TreeNode";

export default function treeToDoublyList(root: TreeNode | null): TreeNode | null {
    let head: TreeNode;
    let prev: TreeNode;

    const inorderTraversal = (node: TreeNode | null) => {
        if (!node) return

        inorderTraversal(node.left)

        if(prev) {
            prev.right = node
            node.left = prev
        } else {
            head = node
        }
        prev = node
        inorderTraversal(node.right)
    }

    inorderTraversal(root)

    if(head! && prev!) {
        head.left = prev 
        prev.right = head
    }

    return head!
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

let cdllHead = treeToDoublyList(root);
console.log(cdllHead)
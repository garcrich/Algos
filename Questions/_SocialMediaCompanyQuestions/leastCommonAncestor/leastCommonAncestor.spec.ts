import TreeNode from "@cds/TreeNode";
import lowestCommonAncestor from "./leastCommonAncestor"

describe('lowestCommonAncestor', () => {
  test('finds the LCA of two nodes in a simple binary tree', () => {
    // Construct the binary tree
    //         3
    //       /   \
    //      5     1
    //     / \   / \
    //    6   2 0   8
    //       / \
    //      7   4
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const p = root.left.right.left; // Node 7
    const q = root.left.right.right; // Node 4

    const lca = lowestCommonAncestor(root, p, q)!

    expect(lca.val).toBe(2);
  });

  test('finds the LCA when one node is the ancestor of the other', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);

    const p = root.left; // Node 5
    const q = root.left.right; // Node 2

    const lca = lowestCommonAncestor(root, p, q)!

    expect(lca.val).toBe(5);
  });
});

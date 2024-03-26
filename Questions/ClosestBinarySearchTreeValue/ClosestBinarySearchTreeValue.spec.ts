import TreeNode from "@cds/TreeNode";
import closestValue from "./ClosestBinarySearchTreeValue";

describe('closestValue', () => {
  test('finds the closest value to the target - right side of tree', () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
    const target = 3.5;
    expect(closestValue(root, target)).toBe(3);
  });

  test('finds the closest value to the target - left side of tree', () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
    const target = 2.5;
    expect(closestValue(root, target)).toBe(2);
  });

  test('handles target greater than all nodes', () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const target = 5;
    expect(closestValue(root, target)).toBe(3);
  });

  test('handles target smaller than all nodes', () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const target = 0;
    expect(closestValue(root, target)).toBe(1);
  });

  test('target matches a node value', () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5));
    const target = 2;
    expect(closestValue(root, target)).toBe(2);
  });

  test('tree with a single node', () => {
    const root = new TreeNode(1);
    const target = 0.5;
    expect(closestValue(root, target)).toBe(1);
  });

  test('chooses the smaller value in case of ties', () => {
    const root = new TreeNode(5, new TreeNode(4), new TreeNode(7));
    const target = 6;
    expect(closestValue(root, target)).toBe(5);
  });
});

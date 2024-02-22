import TreeNode from "@cds/TreeNode";
import { createExampleTree1 } from "./createTrees";

export default function verticalOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const columnTable = new Map<number, number[]>();
    const queue: [TreeNode, number][] = [[root, 0]];
    let minColumn = 0, maxColumn = 0;

    while (queue.length > 0) {
        const [node, column] = queue.shift()!;

        if (!columnTable.has(column)) 
            columnTable.set(column, []);
        
            columnTable.get(column)!.push(node.val);

        if (node.left) {
            queue.push([node.left, column - 1]);
            minColumn = Math.min(minColumn, column - 1);
        }
        if (node.right) {
            queue.push([node.right, column + 1]);
            maxColumn = Math.max(maxColumn, column + 1);
        }
    }

    const result = [];
    for (let i = minColumn; i <= maxColumn; i++) {
        result.push(columnTable.get(i)!);
    }
    return result;
}



const tree = createExampleTree1()
verticalOrder(tree)
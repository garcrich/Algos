import TreeNode from "@cds/TreeNode";
import { createExampleTree1 } from "./createTrees";

export default function verticalOrder(root: TreeNode | null): number[][] {
    const result: number[][]= [];

    if (!root) return result

    const columnTable = new Map<number,number[]>();
    const queue: [TreeNode, number][] = [[root,0]];
    let minCol = 0, maxCol = 0;

    while(queue.length > 0) {
        const [node, column] = queue.shift()!;

        if(!columnTable.has(column))
            columnTable.set(column, [])

        columnTable.get(column)!.push(node.val)

        if(node.left) {
            queue.push([node.left, column - 1])
            minCol = Math.min(minCol, column - 1)
        }

        if(node.right) {
            queue.push([node.right, column + 1])
            maxCol = Math.max(maxCol, column + 1)
        }
    }

    for(let i = minCol; i <= maxCol; i++) {
        result.push(columnTable.get(i)!)
    }

    return result
}



const tree = createExampleTree1()
verticalOrder(tree)
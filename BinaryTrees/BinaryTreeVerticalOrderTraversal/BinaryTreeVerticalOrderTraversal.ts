import TreeNode from "@cds/TreeNode";

export default function verticalOrder(
    root: TreeNode | null
): number[][] {
    if (!root) return [];

    const map = new Map<number, number[]>();
    const queue: [TreeNode, number][] = [[root, 0]]
    let minColumn = 0,
        maxColumn = 0;
    
    while(queue.length > 0) {
        const dequeued = queue.shift();

        if(!dequeued) 
            continue;

        const [node, column] = dequeued;

        if(!map.has(column)) 
            map.set(column, []);
        
        map.get(column)!.push(node.val);

        if (node.left) {
            queue.push([node.left, column - 1]);
            minColumn = Math.min(minColumn, column - 1);
        }

        if (node.right) {
            queue.push([node.right, column + 1]);
            maxColumn = Math.max(maxColumn, column + 1)
        }
    }


    const result: number[][] = [];

    for (let i = minColumn; i <= maxColumn; i++) {
        result.push(map.get(i)!);
    }
    
    return result;
}
import TreeNode from "@cds/TreeNode";

function distanceK(root: TreeNode | null, target: TreeNode, k : number): number[] {
    const graph = new Map<number, number[]>()

    function buildGraph(node:TreeNode | null, parent: TreeNode | null) {
        if(node !== null) {
            if(!graph.has(node.val)) {
                graph.set(node.val, []);
            }

            if(parent) {
                graph.get(node.val)?.push(parent.val)
                if(!graph.has(parent.val)) {
                    graph.set(parent.val, [])
                }
                graph.get(parent.val)?.push(node.val)
            }
            buildGraph(node.left, node)
            buildGraph(node.right, node)
        }
    }

    buildGraph(root, null);

    const visited = new Set<number>()
    visited.add(target.val)
    const queue: [number, number][] = [[target.val, 0]];
    const result: number[] = []

    while(queue.length > 0) {
        const [currentNode, currentDistance] = queue.shift()!;
            if(currentDistance === k) {
                result.push(currentNode);
                continue;
            }

            for(const neighbor of graph.get(currentNode) || []) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push([neighbor, currentDistance + 1])
                }
            }
    }

    return result;
}
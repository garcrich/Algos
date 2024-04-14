import TreeNode from "@cds/TreeNode";

function distanceK(root: TreeNode | null, target: TreeNode, k: number): number[] {
    // Map to hold the parent of each node
    const parents = new Map<TreeNode, TreeNode | null>();

    // DFS to annotate each node with its parent
    function annotateParents(node: TreeNode | null, parent: TreeNode | null) {
        if (node !== null) {
            parents.set(node, parent);
            annotateParents(node.left, node);
            annotateParents(node.right, node);
        }
    }

    // Initialize the parents map with DFS
    annotateParents(root, null);

    // Queue for BFS, starting with the target node at distance 0
    const queue: [TreeNode, number][] = [[target, 0]];
    // Set to keep track of visited nodes to avoid cycles
    const visited = new Set<TreeNode>();
    visited.add(target);

    // Array to store the result
    const result: number[] = [];

    // BFS to find nodes at distance k from target
    while (queue.length > 0) {
        const [node, distance] = queue.shift()!;
        if (distance === k) {
            result.push(node.val);
            // Continue to dequeue without further enqueue to process all nodes at distance k
            continue;
        }

        // Check and enqueue the parent
        const parent = parents.get(node);
        if (parent && !visited.has(parent)) {
            visited.add(parent);
            queue.push([parent, distance + 1]);
        }

        // Check and enqueue the left child
        if (node.left && !visited.has(node.left)) {
            visited.add(node.left);
            queue.push([node.left, distance + 1]);
        }

        // Check and enqueue the right child
        if (node.right && !visited.has(node.right)) {
            visited.add(node.right);
            queue.push([node.right, distance + 1]);
        }
    }

    // Return the result array containing all nodes at distance k
    return result;
}

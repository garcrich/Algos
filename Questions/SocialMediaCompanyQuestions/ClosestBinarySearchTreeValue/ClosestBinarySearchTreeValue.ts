import TreeNode from "@cds/TreeNode";

export default function closestValue(root: TreeNode | null, target: number): number {
    let closest = root?.val || 0;
    let smallestDifference = Infinity;
    let sameDifferenceVal = Infinity;

    const treeTraversal = (node: TreeNode | null) => {
        if (node === null) return;

        const currentDifference = Math.abs(target - node.val);

        if(currentDifference === smallestDifference) {
            sameDifferenceVal = node.val < sameDifferenceVal ? node.val : sameDifferenceVal
        } else if (currentDifference < smallestDifference) {
            smallestDifference = currentDifference;
            closest = node.val;
        }

        if (target < node.val) {
            treeTraversal(node.left);
        } else {
            treeTraversal(node.right);
        }
    };

    treeTraversal(root);

    return closest < sameDifferenceVal ? closest : sameDifferenceVal;
}
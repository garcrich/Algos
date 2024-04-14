import NestedInteger from "./NestedInteger";

export default function NestedListWeightSum(nestedList: NestedInteger[]):number {
    return calculateDepthSum(nestedList, 1)
}

function calculateDepthSum(nestedList: NestedInteger[], depth: number): number {
    let sum = 0;

    for (const nestedItem of nestedList) {
        if (nestedItem.isInteger()) {
            sum += nestedItem.getInteger()! * depth;
        } else {
            sum += calculateDepthSum(nestedItem.getList(), depth + 1);
        }
    }

    return sum;
}
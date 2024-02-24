import NestedInteger from "./NestedInteger";

export default function depthSum(nestedList: NestedInteger[]): number {
    let sum = 0;
    let queue: { list: NestedInteger[], depth: number }[] = [{ list: nestedList, depth: 1 }];

    while (queue.length > 0) {
        let { list, depth } = queue.shift()!;

        for (let i = 0; i < list.length; i++) {
            let elem = list[i];

            if (elem.isInteger()) {
                sum += depth * (elem.getInteger()!);
            } else {
                queue.push({ list: elem.getList(), depth: depth + 1 });
            }
        }
    }

    return sum;
} 
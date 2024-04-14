export default function minRemoveToMakeValid(s: string): string {
    let transformedStr = ''
    const stack: number[] = [];
    const removalSet = new Set<number>();

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(char === '(') {
            stack.push(i)
        } else if (char === ')') {
            if(stack.length === 0) {
                removalSet.add(i)
                continue
            }
            stack.pop()
        }
    }

    stack.forEach(index => removalSet.add(index))

    for(let i = 0; i < s.length; i++) {
        if(!removalSet.has(i)) {
            transformedStr += s[i]
        }
    }

    return transformedStr;
}
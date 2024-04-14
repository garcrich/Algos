export default function simplifyPath(path: string): string {
    const stack:string[] = []
    let outputPath: string = ''
    const segments: string[] = path.split('/')

    for(const segment of segments) {
        if(segment === '..') {
            if(stack.length > 0) {
                stack.pop()
            }
        } else if (segment !== '' && segment !== '.') {
            stack.push(segment)
        }
    }

    outputPath = '/' + stack.join('/')

    return outputPath
};
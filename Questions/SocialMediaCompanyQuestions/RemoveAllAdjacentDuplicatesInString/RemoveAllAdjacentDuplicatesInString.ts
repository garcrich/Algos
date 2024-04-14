export default function removeDuplicates(s: string): string {
    const letterStack: string[] = []

    for(const char of s) {
        if(char === letterStack[letterStack.length - 1]) {
            letterStack.pop()
        } else {
            letterStack.push(char)
        }
    }

    return letterStack.join('')
}
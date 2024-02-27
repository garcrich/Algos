export default function calculate(s: string): number {
    const stack: number[] = []
    let currentSign = '+'
    let num = 0

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(!isNaN(Number(char)) && char !== ' ') {
            num = num * 10 + Number(char)
        }

        if(isNaN(Number(char)) || i === s.length - 1) {
            switch (currentSign) {
                case '+':
                    stack.push(num)
                    break
                case '-':
                    stack.push(-num)
                    break
                case '*':
                    stack.push(stack.pop()! * num)
                    break
                default:
                    const divisor = stack.pop()!
                    stack.push(divisor / num | 0)
            }

            num = 0
            currentSign = char
        }
    }

    return stack.reduce((sum, num) => sum += num, 0)
};
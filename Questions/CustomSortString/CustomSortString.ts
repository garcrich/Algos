export default function customSortString(order: string, s: string): string {
    const charOrderCounter: {[key:string]: number} = {}
    let result = ''
    let strNoOrder = ''

    for(const char of order) {
        if(!charOrderCounter[char]) {
            charOrderCounter[char] = 0
        }
    }

    for(const char of s) {
        if(charOrderCounter.hasOwnProperty(char)) {
            charOrderCounter[char]++
        } else {
            strNoOrder += char
        }
    }

    for(const char of order) {
        result += char.repeat(charOrderCounter[char]);
    }

    return result += strNoOrder
};
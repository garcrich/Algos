export default function myPow(x: number, n: number): number {
    if(n === 0) return 1

    if(n < 0) {
        x = 1/x
        n = -n
    }

    return fastPow(x,n)
}

function fastPow(x:number, n:number) {
    if (n === 0) return 1

    let half:number = fastPow(x, Math.floor(n/2))

    if(n % 2 === 0) {
        return half * half
    } else {
        return half * half * x
    }
}
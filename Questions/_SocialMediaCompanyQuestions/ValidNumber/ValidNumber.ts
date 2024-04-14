export default function isNumber(s: string): boolean {
    s = s.trim()

    let pointSeen = false
    let eSeen = false
    let numberSeen = false
    let numberAfterE = true;

    for(let i = 0; i < s.length; i++) {
        if('0' <= s[i] && s[i] <= '9') {
            numberSeen = true
            if(!numberAfterE) numberAfterE = true
        } else if (s[i] === '.') {
            if (eSeen || pointSeen) return false
            pointSeen = true
        } else if (s[i] === 'e' || s[i] === 'E') {
            if (eSeen || !numberSeen) return false
            eSeen = true
            numberAfterE = false
        } else if (s[i] === '+' || s[i] === '-') {
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false
        } else {
            return false
        }
    }

    return numberSeen && numberAfterE
};
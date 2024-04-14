
export default function validPalindrome(s: string):boolean {
    let left = 0,
        right = s.length - 1,
        isValid = true;

    while(left < right) {
        if(s[left] !== s[right]) {
            isValid = isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
        left++
        right--
    }
    return isValid
}

function isPalindrome(str: string, start: number, end: number): boolean {
    let isValid = true
    while(start < end) {
        if(str[start] !== str[end]) {
            isValid = false
            break;
        }

        start++;
        end--;
    }
    return isValid
}
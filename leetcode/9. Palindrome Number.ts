//https://leetcode.com/problems/palindrome-number/
function isPalindrome(x: number): boolean {
    
    const strX = String(x)
    const reversed = strX.split('').reverse().join('')

    if(strX === reversed) return true

    return false
};
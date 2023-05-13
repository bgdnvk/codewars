//https://leetcode.com/problems/valid-palindrome/description/
function isPalindrome(s: string): boolean {
    const arrStr: string[] = []

    for(let w of s) {
        if(w.match(/[A-Za-z0-9]/i)) arrStr.push(w.toLowerCase())
    }

    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] !== arrStr[arrStr.length -1 - i]) return false
    }

    return true
};
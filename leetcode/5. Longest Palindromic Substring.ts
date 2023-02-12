//https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome(s: string): string {
    if(s.length === 1) return s[0]
    if(s.length === 2) {
        if(s[0] !== s[1]) return s[0]
    }

    let palindrome = ''
    let max = 0

    for(let i = 0; i < s.length; i++) {
        // console.log('i', s[i])
        let wordArr: string[] = []
        wordArr.push(s[i])
        // console.log('wordArr', wordArr)
        for(let j = i+1; j < s.length; j++) {
            // console.log('j', s[j])
            wordArr.push(s[j])
            // console.log('word', wordArr)
            if(checkPalindrome(wordArr)) {
                // console.log('!!!! - palindrome:', wordArr)
                if(wordArr.length > max) {
                    max = wordArr.length
                    palindrome = wordArr.join('')
                }
                // pals.push(wordArr.join(''))
            }
        }

    }

    if(max === 0) return s[0]

    return palindrome
};

function checkPalindrome(s: string[]) {
    const curr = s.join('')
    const reversed = reverseArr(s)
    // console.log('reversed:', reversed)
    // console.log('curr:', curr)
    if(reversed === curr) return true
    return false
}

function reverseArr(s: string[]): string {
    const arr:string[] = []

    for(let i = s.length-1; i >= 0; i--){
        arr.push(s[i])
    }

    return arr.join('')
}
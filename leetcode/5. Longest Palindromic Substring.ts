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
            }
        }

    }

    if(max === 0) return s[0]

    // console.log(palindrome)
    return palindrome
};

function checkPalindrome(s: string[]) {
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[s.length-(i+1)]) return false
    }
    return true 
}
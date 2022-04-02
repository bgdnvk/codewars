//https://leetcode.com/problems/valid-palindrome-ii/
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
//slowest palindrome checker ever
/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    // console.log(s)
    // s = s.split("")
    
      
    const checkPalindrome = (word) => {

        const reversed = word.split("").reverse().join("")
        // console.log('word is ', word)
        // console.log('reversed is ', reversed)
        if (word === reversed) return true 
    } 
    
    // if(checkPalindrome(s)) return true

    let flag = false
    const sArr = s.split("")
    for(let i = 0; i < sArr.length; i++){
        const newArr = [...sArr]
        newArr.splice(i, 1)
        // console.log('b4 checking ', newArr)
        if(checkPalindrome(newArr.join())) flag = true
        
    }
    return flag
};
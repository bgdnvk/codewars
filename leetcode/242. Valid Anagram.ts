//https://leetcode.com/problems/valid-anagram/description/
function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false

    let sortedS = [...s].sort()
    let sortedT = [...t].sort()

    for(let i = 0; i < s.length; i++) {
        if(sortedS[i] !== sortedT[i]) return false
    }

    return true
};
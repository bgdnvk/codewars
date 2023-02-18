//https://leetcode.com/problems/regular-expression-matching
function isMatch(s: string, p: string): boolean {
    
    const res = s.match(p)
    if(!res) return false
    if (res[0] === s) return true

    return false 
};
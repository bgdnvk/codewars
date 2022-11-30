//https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
function isIsomorphic(s: string, t: string): boolean {
    
    if(s.length !== t.length) {
        return false
    }

    for(let i = 0; i < s.length; i++){
        console.log(s[i])
    }
    return false
};
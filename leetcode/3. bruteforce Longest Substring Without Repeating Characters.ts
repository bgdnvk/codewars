function lengthOfLongestSubstring(s: string): number {

    let res = 0
    for(let i = 0; i < s.length; i++) {
        //console.log('i', s[i])
        for(let j = i; j < s.length; j++) {
            //console.log('j', s[j])
            if(checkUnique(s, i, j)) {
                res = Math.max(res, j-i+1)
            }
        }
    }
    
    return res 
};

function checkUnique(s: string, i: number, j: number): boolean {
    let set = new Set()
    while(i <= j) {
        let curr = s[i]
        if(set.has(curr)) {
            return false
        }
        set.add(curr)
        i++
    }

    return true 
}
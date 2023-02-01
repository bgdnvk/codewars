//https://leetcode.com/problems/longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
    const set = new Set()
    let max = 0
    let start = 0

    if(s.length === 0) return 0
    if(s.length === 1) return 1

    for(let i = 0; i < s.length; i++) {
       // console.log(start)
       // console.log(s[start], s[i])
       // console.log(set)
        while(set.has(s[i])) {
            //console.log('inside set')
            set.delete(s[start])
            start += 1
        }

        set.add(s[i])
        max = Math.max(max, i - start +1)
    }

    return max
};
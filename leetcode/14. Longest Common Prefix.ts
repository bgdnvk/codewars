//https://leetcode.com/problems/longest-common-prefix/description/
function longestCommonPrefix(strs: string[]): string {

    if(strs.length === 0) return ''
    if(strs.length === 1) return strs[0]

    let shortest = shortestWord(strs)
    let found = false
    let word = shortest

    while(!found) {

        let count = 0

        for(let i = 0; i < strs.length; i++) {
            if(strs[i].slice(0, word.length).includes(word)) {
                count++
            }
        }

        if(count === strs.length) {
            return word
        } else {
            word = word.slice(0,-1)
        }
    }

    return '' 
};

function shortestWord(arr: string[]): string {
    let min = Infinity 
    let word = ''
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length < min) {
            min = arr[i].length
            word = arr[i]
        }
    }

    return word
}
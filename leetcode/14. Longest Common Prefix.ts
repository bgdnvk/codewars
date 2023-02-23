//https://leetcode.com/problems/longest-common-prefix/description/
function longestCommonPrefix(strs: string[]): string {
    //edge cases
    if(strs.length === 0) return ''
    if(strs.length === 1) return strs[0]

    let shortest = shortestWord(strs)

    let found = false
    let word = shortest

    while(!found) {
        //tracker to find if all the words contain the prefix
        let count = 0

        for(let i = 0; i < strs.length; i++) {
            //compare the first part of the word which has to be the same size as our shortest word
            if(strs[i].slice(0, word.length).includes(word)) {
                //increase count if the prefixes match
                count++
            }
        }

        //check if all the words had the prefix
        if(count === strs.length) {
            return word
        } else {
            //if not then iterate again by slicing the end our shortest word
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
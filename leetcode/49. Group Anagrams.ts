//https://leetcode.com/problems/group-anagrams/description/
function groupAnagrams(strs: string[]): string[][] {
    if(strs.length === 0) return [[""]]
    const res: string[][] = []
    const map = new Map()

    while(strs.length > 0) {
        //get curr
        const curr: string = strs.shift()!
        //sort it out and we will use this as keys (anagrams have the same key)
        const currSort = [...curr].sort().join('')
        //check if an anagram exists of the current element
        //if it doesn't then make a new key for it
        if(!map.has(currSort)) {
            map.set(currSort, [curr])
        } else {
            //if an anagram already exists get the array of elements pertaining to that anagram
            const mapCurrArr = map.get(currSort)
            //push the current element to this anagram
            mapCurrArr.push(curr)
            //set the keys again
            map.set(currSort, mapCurrArr)
        }
    }

    //push all the values (per key) of the map into the res array
    map.forEach((e: string[]) => res.push(e))

    return res
};
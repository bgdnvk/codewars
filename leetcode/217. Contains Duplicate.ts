//https://leetcode.com/problems/contains-duplicate/description/
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>()

    for(let e of nums) {
        if(set.has(e)) {
            return true
        } else {
            set.add(e)
        }
    }

    return false
};
//https://leetcode.com/problems/top-k-frequent-elements/description/
function topKFrequent(nums: number[], k: number): number[] {
    const res = []
    const map = new Map()

    let sorted = nums.sort((a, b) => a-b)

    for(let e of sorted) {
        if(map.has(e)) {
            let val = map.get(e)
            val += 1
            map.set(e, val)
        } else {
            map.set(e, 1)
        }
    }

    const sortedArr: number[] = [...map.entries()].sort((a, b) => b[1] - a[1])
    console.log('sorted arr', sortedArr)
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArr[i][0])
    }

    return res
};
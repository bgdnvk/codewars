//https://leetcode.com/problems/filter-elements-from-array/
function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const res: number[] = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            res.push(arr[i])
        }
    }

    return res
};
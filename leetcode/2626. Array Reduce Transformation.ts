//https://leetcode.com/problems/array-reduce-transformation/description/
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc = init

    for(let e of nums) {
        acc = fn(acc, e)
    }
    
    return acc
};
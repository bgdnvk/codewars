//https://leetcode.com/problems/product-of-array-except-self/description/
function productExceptSelf(nums: number[]): number[] {
    const res: number[] = []

    let acc: number = 1
    for(let i = 0; i < nums.length; i++) {
        res.push(acc)
        acc *= nums[i]
    }

    acc = 1
    for(let i = nums.length-1; i >= 0; i--) {
        res[i] *= acc
        acc *= nums[i]
    }

    return res
};
//https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
function runningSum(nums: number[]): number[] {
    let sum: number = 0;
    for(let i = 0; i < nums.length; i++){
        sum+=nums[i]
        nums[i] = sum;
    }

    return nums
};
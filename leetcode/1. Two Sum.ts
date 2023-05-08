//https://leetcode.com/problems/two-sum/description/
// function twoSum(nums: number[], target: number): number[] {
//     const res: number[] = []

//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) res.push(i, j)
//         }
//     }

//     return res
// };
// 

function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if(map.has(diff)) {
            return [i, map.get(diff)]
        } else {
            map.set(nums[i], i)
        }
    }
    
    return []
};
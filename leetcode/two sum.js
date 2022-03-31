//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        
        const diff = target - nums[i]
        const found = nums.indexOf(diff)
        
        if(found !== -1 && found !== i) return [i, found]
        
    }

};
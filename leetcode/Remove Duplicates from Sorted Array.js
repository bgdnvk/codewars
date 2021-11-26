//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3258/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // nums = [...new Set(nums)]
    // return nums.length
    // doesn't work cuz it has to be in place
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//mods in place
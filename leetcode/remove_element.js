/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    nums = nums.filter(e => e != val)

    
    console.log(nums.length)
    console.log(nums)
    return nums.length
};
removeElement([3,2,2,3], 3)
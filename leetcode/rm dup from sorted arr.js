//https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // nums = [...new Set(nums)]
    // return nums.length
    // doesn't work cuz it has to be in place
    for (let i = 0; i < nums.length; i++) {
        //check if the next element is the same
        if (nums[i] === nums[i + 1]) {
            //if it is, remove it
            nums.splice(i, 1)
            //and move the index back one
            i--
        }
    }
    
};

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
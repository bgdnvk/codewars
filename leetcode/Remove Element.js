//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  var removeElement = function(nums, val) {
    
//     nums = nums.filter(e => e != val)

    
//     console.log(nums.length)
//     console.log(nums)
//     return nums.length
// };

const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }
    }
    return nums.length;
  };

removeElement([3,2,2,3], 3)
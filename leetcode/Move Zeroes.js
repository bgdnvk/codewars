//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
     if (nums.length === 0) return
     let zeroPointer = 0, j = 0
     while (j < nums.length) {
         if (nums[j] !== 0) {
             nums[zeroPointer] = nums[j]
             zeroPointer++
         }
         j++
     }
     while (zeroPointer < nums.length) {
         nums[zeroPointer] = 0
         zeroPointer++
     }
     console.log(nums);
 }
    
moveZeroes([0,1,0,3,12])
//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
     console.log(nums);
     //edge case in case arr is empty
     if (nums.length === 0) return
     //make two pointers
     let positiveEleTracker = 0, j = 0
     //loop through array finding positive elements and filling the zeroes
     while (j < nums.length) {
         if (nums[j] !== 0) {
             //once we find a positive element swap it and keep count of positive elements
             nums[positiveEleTracker] = nums[j]
             positiveEleTracker++
         }
         //keep iterating through array
         j++
     }
     console.log(nums);
     //use the positiveEleTracker to fill the rest of the array with zeroes
     //fill the rest of the array with zeroes
     while (positiveEleTracker < nums.length) {
         nums[positiveEleTracker] = 0
         positiveEleTracker++
     }
     console.log(nums);
 }
    
moveZeroes([0,1,0,3,12])
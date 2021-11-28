//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
     //make a copy with spread operator
     //use Set to remove duplicates
     //sort the array to identify the 3rd different number
     //return the result on 3rd position ([2])
    let thirdNum = [...new Set(nums)].sort((a,b) => b-a)[2];
    if(thirdNum === undefined) return nums[1];
    return thirdNum;
};
// thirdMax([2,2,3,1]);
// thirdMax([2,1]);
// thirdMax([2,2,2,2]);
thirdMax([2,2,3,1])

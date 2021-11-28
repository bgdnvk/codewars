//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    //make a copy of the array without dupes
    const nonDupArr = [...new Set(nums)];
    //order the array from largest to smallest
    nonDupArr.sort((a,b) => b-a);
    console.log(nonDupArr);
    //get the third max number after sorting
    const thirdNum = nonDupArr[2];
    //if the array is less than 3 return the maximum number
    //if it's greater than 3 return the third maximum
    return nonDupArr.length < 3 ? Math.max(...nonDupArr) : thirdNum;
};
// thirdMax([2,2,3,1]);
// thirdMax([2,1]);
// thirdMax([2,2,2,2]);
// thirdMax([2,2,3,1])
// console.log(thirdMax([2,2,3,1]));

console.log(
    thirdMax([5,2,2])
);
//should be 5
// https://leetcode.com/problems/squares-of-a-sorted-array/
//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let arr = [];
    for (let i of nums){
        arr.push(i*i)
    }
    console.log(arr)
    arr.sort((a,b) => a-b)
    console.log(arr)
    return arr
};
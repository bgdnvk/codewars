//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    console.log(...nums)
    let count = 0;
    for (let num of nums){
        console.log(num.toString().split(''))
        let innerNum = num.toString().split('')
        if (innerNum.length % 2 === 0){
            count++
        }
    }
    return count;
};
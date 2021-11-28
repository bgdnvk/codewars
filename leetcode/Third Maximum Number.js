//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
            count++;
        }
        if(count === 3) {
            return max;
        }
    }
    console.log(max);
    return max;
};
// thirdMax([2,2,3,1]);
// thirdMax([2,1]);
// thirdMax([2,2,2,2]);
thirdMax([2,2,3,1])
//wrong
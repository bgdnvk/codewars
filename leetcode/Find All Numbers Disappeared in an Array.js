//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const max = nums.length;
    console.log(max);
    let res = [];
    for(let i = 1; i <= max; i++){
        let found = false;
        
        for(let j = 0; j < nums.length; j++){
            if (i === nums[j]){
                found = true;
            }
        }
        if (!found){
            res.push(i);
        }
    }
    console.log(res);
    return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
// findDisappearedNumbers([1,1]);
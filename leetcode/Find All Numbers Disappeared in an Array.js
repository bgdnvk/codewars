//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
     //get the max range meaning it goes from [1,max]
    const maxRange = nums.length;
    console.log(maxRange);
    //array to store the missing numbers
    let res = [];
    //iterate from 1 to the range we need
    for(let i = 1; i <= maxRange; i++){
        //if the number is not in the array, push it to the array
        let found = false;
        //iterate through the array to see if the number is in the array
        for(let j = 0; j < nums.length; j++){
            if (i === nums[j]){
                //if the number is in the array, set found to true
                found = true;
            }
        }
        //only push the numbers that are not found
        if (!found){
            res.push(i);
        }
    }
    console.log(res);
    return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
// findDisappearedNumbers([1,1]);
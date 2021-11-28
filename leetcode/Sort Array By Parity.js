//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
     //edge case if arr length is 0
    if(nums.length === 0) return nums;
    //keep track where the even index is
    let evenIndex = 0;
    for(let i =0; i< nums.length; i++){
        //if even
        if(nums[i] % 2 == 0){
            console.log(nums[i]);
            //saving the val that's gonna get rewriten
            //this is the odd value
            let oddTempVal = nums[evenIndex];
            console.log("temp is "+oddTempVal);
            //if the value is even it should go at the beginning
            //there are no strict rules so any even value will do
            nums[evenIndex] = nums[i];
            //keep track of the even index
            evenIndex++;
            // place the odd value where the even value was
            nums[i] = oddTempVal;
        }
    }
    console.log(nums);
    return nums;
};
// sortArrayByParity([3,1,2,4]);
sortArrayByParity([6,3,1,2,4]);

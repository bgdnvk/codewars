//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
     //edge case if arr length is 0
    if(nums.length === 0) return nums;
    let oddIndex = 0;
    let evenIndex = 0;
    for(let i =0; i< nums.length; i++){
        if(nums[i] % 2 == 0){
            console.log(nums[i]);
            //saving the val that's gonna get rewriten
            //this is the odd value
            let temp = nums[evenIndex];
            console.log("tem is "+temp);
            oddIndex = i;
            nums[evenIndex] = nums[i];
            evenIndex++;
            nums[oddIndex] = temp;
            
        }
    }
    console.log(nums);
    return nums;
};
sortArrayByParity([3,1,2,4]);
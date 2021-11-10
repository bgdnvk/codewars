//Max Consecutive Ones
//https://leetcode.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    var contmax = 0;
    var cont = 0;
    for(let i = 0; i < nums.length; i++){
        // console.log("i is: "+nums[i]);
        if(nums[i]){
            cont++;
            // console.log("cont is "+cont);
            
        } else {
            console.log("it's a zero " +i)
            console.log("cont is "+cont)
            contmax = Math.max(cont, contmax);
            cont = 0;
        }
    }
    // console.log("contmax is "+contmax)
    
    return cont > contmax ? cont: contmax;
    // return contmax;
};
//https://leetcode.com/problems/3sum-closest
function threeSumClosest(nums: number[], target: number): number {

    nums = nums.sort((a,b) => a-b)
    let min = Infinity
    let diff = 0

    // console.log(nums)

    for(let i = 0; i < nums.length-2; i++) {

        let left = i+1
        let right = nums.length-1

        while(left < right) {
            let sum = nums[i]+nums[left]+nums[right]

            if(sum === target) return sum
            diff = Math.abs(sum-target)

            if(diff < Math.abs(min-target)) min = sum

            if(sum>target) {
                right--
            } else {
                left++
            }
        }

    }

    return min
};
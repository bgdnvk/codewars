//fails: [4,0,5,-5,3,3,0,-4,-5] target: -2
function threeSumClosest(nums: number[], target: number): number {

    nums = nums.sort((a,b) => a-b)
    let min = Infinity
    let res = 0
    let diff = 0

    // console.log(nums)

    for(let i = 0; i < nums.length-2; i++) {
        

        let j = i+1
        let k = nums.length-1

        let sum = nums[i]+nums[j]+nums[k]

        while(j < k) {

            if(sum === target) return sum
            
            if(sum > target) {
                diff = sum - target

                if(diff < min) {
                    min = diff
                    res = sum
                }

                k-- 
            } else {
                diff = target - sum

                if(diff < min) {
                    min = diff
                    res = sum
                }
                j++ 
            } 
        }

    }

    return res
};
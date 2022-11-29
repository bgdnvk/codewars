//https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
function pivotIndex(nums: number[]): number {
    
    let pivot: number = 0;
    let sumI: number = 0;
    
    for (let i = 0; i < nums.length; i++){
        let sumJ: number = 0;
        sumI+=nums[i]
        for(let j = i + 2; j < nums.length; j++){
            sumJ += nums[j]
            if(sumI == sumJ) {
                pivot = i + 1
            }
        }
        sumJ = 0;
    }
    return pivot
};
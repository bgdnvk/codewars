//https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
function pivotIndex(nums: number[]): number {
    
    let pivot: number = 0;
    let sumI: number = 0;
    let flag: boolean = false;
    
    for (let i = 0; i < nums.length; i++){
        let sumJ: number = 0;
        if(i === 0) {
            sumI = 0
        } else {
            sumI+=nums[i]
            
        }
        console.log("i ", i)
        console.log("sum i ", sumI)
        for(let j = i + 1; j < nums.length; j++){
            console.log("-- j", j)
            console.log("-- j nums:", nums[j])
            console.log("sum j b4:", j)
            sumJ += nums[j]
            console.log("sum j ", sumJ)
            if(sumI == sumJ) {
                pivot = i
                flag = true;
            }
        }
        sumJ = 0;
    }
    
    if (!flag) {
        return -1
    }
    return pivot
};
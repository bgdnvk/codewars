//https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
function pivotIndex(nums: number[]): number {
    
    let sumLeft: number = 0;
    let sumRight: number = 0;
    
    for(let i = 0; i < nums.length; i++){
        
        if(i === 0 || i === nums.length-1) {
            sumLeft = 0
        } else {
            sumLeft += nums[i-1]
        }
        console.log("i:", i)
        for(let j = i+1; j < nums.length; j++) {
            console.log("-- j:", j)
            sumRight+= nums[j];
            
        }
        console.log("SL", sumLeft)
        console.log("SR", sumRight)
        if(sumLeft === sumRight && i != nums.length-1){
            console.log("found")
            return i;
        }
        sumRight = 0;
        
    }
    
    return -1
};
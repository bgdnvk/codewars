function threeSum(nums: number[]): number[][] {
    const res  = []
    const ordered = nums.sort((a, b) => a-b)

    for(let i = 0; i < ordered.length-2; i++) {

        let j = i+1
        let k = ordered.length-1
        if(checkSum(ordered[i], ordered[j], ordered[k]) === 0) {
            res.push([ordered[i], ordered[j], ordered[k]])
        } else {

            while(j < k) {
                if(checkSum(ordered[i], ordered[j], ordered[k]) === 0) res.push([ordered[i], ordered[j], ordered[k]])

                if(checkSum(ordered[i], ordered[j], ordered[k]) === 1) k--
                if(checkSum(ordered[i], ordered[j], ordered[k]) === -1) j--
            }
        }
    }

    return res
};

function checkSum(i, j, k): number{
    if(i+j+k > 0) return 1 
    if(i+j+k < 0) return -1 
    return 0
}
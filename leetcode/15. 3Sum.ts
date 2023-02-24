//https://leetcode.com/problems/3sum/
function threeSum(nums: number[]): number[][] {
    let map = new Map()

    let ordered = nums.sort((a,b) => a-b)

    for(let i = 0; i < ordered.length; i++) {

        let curr = getUniqueArr(ordered[i], ordered)
        map.set(ordered[i], curr)
    }

    console.log(map)

    let twoMap = new Map()

    console.log(ordered)

    for(let i = 0; i < ordered.length; i++) {

        let arr = map.get(nums[i])
        
    }


    return []

};

function getUniqueArr(num: number, nums: number[]): number[] {

    let res: number[] = []

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== num) res.push(nums[i])
    }

    return res
}

function getTwoUniqueArr(num: number, map: Map<number, number[]>): any {

}
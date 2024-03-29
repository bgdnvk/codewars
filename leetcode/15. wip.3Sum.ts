//https://leetcode.com/problems/3sum/
function threeSum(nums: number[]): number[][] {
    let map = new Map()

    let ordered = nums.sort((a,b) => a-b)
    console.log(ordered)

    for(let i = 0; i < ordered.length; i++) {

        let curr = getUniqueArr(ordered[i], ordered)
        map.set(ordered[i], curr)
    }

    console.log(map)

    let twoMap = new Map()

    for(const [k, v] of map) {
        console.log(`k: ${k}, v: ${v}`)
        for(let i = 0; i < v.length; i++) {
            let curr = getUniqueArr(v[i], v)
            console.log('curr', curr)
            twoMap.set([k, v[i]], curr)
        }
    }

    console.log(twoMap)

    const res = []

    for(const [k, v] of twoMap) {
        console.log('k', k)
        console.log('v', v)
        const [k1, k2] = k
        let sum = k1+k2
        console.log('sum', sum)
        for(let ele of v) {
            if(sum+ele === 0) {
                //@ts-ignore
                res.push([k1,k2,ele])
            }
        }
    }

    console.log(res)


    return []

};

function getUniqueArr(num: number, nums: number[]): number[] {

    let res: number[] = []

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== num && !res.includes(nums[i])) res.push(nums[i])
    }

    return res
}

function getTwoUniqueArr(num: number, map: Map<number, number[]>): any {

}

//https://leetcode.com/problems/3sum/
// function threeSum(nums: number[]): number[][] {
//     const res: number[][] = []
//     const ordered = nums.sort((a, b) => a-b)

//     for(let i = 0; i < ordered.length-2; i++) {

//         let j = i+1
//         let k = ordered.length-1
//         if(checkSum(ordered[i], ordered[j], ordered[k]) === 0) {
//             res.push([ordered[i], ordered[j], ordered[k]])
//         } else {

//             while(j < k) {
//                 if(checkSum(ordered[i], ordered[j], ordered[k]) === 0) res.push([ordered[i], ordered[j], ordered[k]])

//                 if(checkSum(ordered[i], ordered[j], ordered[k]) === 1) k--
//                 if(checkSum(ordered[i], ordered[j], ordered[k]) === -1) j--
//             }
//         }
//     }

//     return res
// };

// function checkSum(i, j, k): number{
//     if(i+j+k > 0) return 1 
//     if(i+j+k < 0) return -1 
//     return 0
// }
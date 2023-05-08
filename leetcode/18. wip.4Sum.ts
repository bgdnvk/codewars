//https://leetcode.com/problems/4sum/
function fourSum(nums: number[], target: number): number[][] {

    const res = []
    
    return res
};

//fails
//[-5,-4,-3,-2,-1,0,0,1,2,3,4,5]
// function fourSum(nums: number[], target: number): number[][] {
//     const res = []
    
//     const sortedNums = nums.sort((a, b) => a-b)
//     // console.log(sortedNums)

//     for(let i = 0; i < sortedNums.length; i++) {
//         // console.log('i', sortedNums[i])
//         for(let j = i+1; j < sortedNums.length; j++) {
//             for(let k = j+1; k < sortedNums.length; k++){
//                 for(let l = k+1; l < sortedNums.length; l++) {
//                     if(sortedNums[i] + sortedNums[j]+ sortedNums[k]+sortedNums[l] === target){
//                         const arr = [sortedNums[i], sortedNums[j], sortedNums[k], sortedNums[l]]
//                         res.push(arr)
//                     }
//                 }
//             }
//         }
//     }

//     const compareArrays = (a, b) => a.length === b.length && a.every((element, index) => element === b[index]);


//     console.log(res)
//     for(let i = 0; i < res.length; i++){
//         // console.log('looping')
//         // console.log(res[i])
//         if(i !== res.length-1){
//             if(compareArrays(res[i], res[i+1])) delete res[i] 
//         }
//     }
//     // console.log(res)

//     const lmao = []
//     for(let i of res) {
//         if(i) lmao.push(i)
//     }


//     return lmao

// };
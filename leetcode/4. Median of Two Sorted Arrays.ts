//https://leetcode.com/problems/median-of-two-sorted-arrays

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    
    const arr:number[] = []

    for(let e of nums1) {
        arr.push(e)
    }
    for(let e of nums2) {
        arr.push(e)
    }
    arr.sort((a,b) => a-b)
    // console.log(arr)
    let mid = 0
    let res = 0
    // num 1 [3]
    // num 2 [-2,-1]

    if(isEven(arr.length)) {
        // console.log('is even')
        mid = getMid(arr.length)
        // console.log('mid even', mid)
        res = (arr[mid] + arr[(mid -1)])/2

    } else {
        // console.log('not even')
        mid = getMid(arr.length)
        // console.log('mid is', mid)
        res = arr[mid]
    }

    return res 
};

function isFloat(n: number): boolean {
    return !!(n % 1)
}

function isEven(n: number): boolean {
    return n % 2 === 0
}

function getMid(n: number): number {
    return Math.floor(n/2)
}
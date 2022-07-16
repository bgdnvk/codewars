//https://leetcode.com/problems/sort-colors/
//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

//bubble sort lmao
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(arr) {
    
    for (i = 0; i < arr.length - 1; i++) {
        let swapped = false

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                
                swapped = true
            }
        }

        if(!swapped) {
            console.log(`last weren't swapped`)
            return
        }
    }
};
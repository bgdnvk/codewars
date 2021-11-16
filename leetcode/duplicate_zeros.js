/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }
    }
};
// duplicateZeros([1,0,2,3,0,4,5,0])
// duplicateZeros([1,2,3])
// duplicateZeros([0,1,7,6,0,2,0,7])
// duplicateZeros([0,1,7,6,0,2,0,0,0,7])
duplicateZeros([[0,4,1,0,0,8,0,0,3]])
//expected [0,0,4,1,0,0,0,0,8]

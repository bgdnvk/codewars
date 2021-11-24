//https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max);

    console.log(`max is ${max}`);
    console.log(`maxIndex is ${maxIndex}`);
    if(maxIndex === 0 || maxIndex === arr.length-1){
        return false;
    }
    
    for(let i = 0; i < maxIndex; i++){
        console.log('first half');
        console.log(`is is ${i} i+1 is ${i+1}`);
        if(arr[i] > arr[i+1] || arr[i] === arr[i+1]){
            return false;
        }
    }

    for(let i = maxIndex; i < arr.length; i++){
        console.log('second half');
        console.log(`is is ${i} i+1 is ${i+1}`);
        if(arr[i] < arr[i+1] || arr[i] === arr[i+1]){
            return false;
        }
    }
    return true;
};

// console.log(
//     validMountainArray([0,3,2,1])
// );
//expected true

// console.log(
//     validMountainArray([0,1,2,3,4,5,6,7,8,9])
// );

// console.log(
//     validMountainArray([2,1])
// );
console.log(
    validMountainArray([3,5,5])
);
//expects false
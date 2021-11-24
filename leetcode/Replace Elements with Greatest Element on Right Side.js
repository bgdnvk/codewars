//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
     console.log(arr);
    for(let i = 0; i < arr.length-1; i++){
        console.log(`i is ${i}`);
        console.log(`arr[i] is ${arr[i]}`);
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] < arr[j]){
                arr[i] = arr[j];
            }
        }
    }
    return arr;
};
console.log(
    replaceElements([17,18,5,4,6,1])
);
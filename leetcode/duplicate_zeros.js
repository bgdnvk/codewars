/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
     console.log('in funct');
     console.log(arr);
    const indexes = []
    for (let i=0; i<arr.length; i++){
        console.log(i)
        if(arr[i] === arr[arr.length-1]){
            return
        }
        if(arr[i] === 0){
            indexes.push(i)
        }
    }
    console.log(indexes)
    
    for(let i of indexes){
        arr.splice(i,0,"bum")
    }
    console.log(arr)
};
duplicateZeros([1,0,2,3,0,4,5,0])

//duplicate zeros in an array and push them to the end of the array
console.log('hihi');
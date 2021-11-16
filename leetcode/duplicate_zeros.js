/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    console.log(`input: ${arr}`);
    const indexes = []
    for (let i=0; i<arr.length; i++){
        if(arr[i] === 0 && i !== arr.length-1 && i !== arr.length-2){
            indexes.push(i)
        }
    }

    console.log(`popd arr: ${arr}`)
    console.log(`indexes: ${indexes}`);
    if(indexes.length !== 0){
        // arr.splice(indexes[0], 0, 0)

        console.log(`indexes: ${indexes}`)
        for( let i of indexes){
            arr.pop()
        }
        
        for (let i=0; i<indexes.length; i++){
            // arr.splice(indexes[i]+1, 0, 0)
            // const temp = [...arr]
            // console.log(`temp: ${temp}`);
            // temp.splice(indexes[i]+i, 0, 0)
            // console.log(`temp splice: ${temp}`);
            console.log(`arr b4 splice: ${arr}`);
            arr.splice(indexes[i]+i, 0, 0)
            console.log(`arr after splice: ${arr}`);

        }
    }


    console.log(`result arr ${arr}`)
    return arr
};
// duplicateZeros([1,0,2,3,0,4,5,0])
// duplicateZeros([1,2,3])
// duplicateZeros([0,1,7,6,0,2,0,7])
// duplicateZeros([0,1,7,6,0,2,0,0,0,7])
duplicateZeros([[0,4,1,0,0,8,0,0,3]])
//expected [0,0,4,1,0,0,0,0,8]

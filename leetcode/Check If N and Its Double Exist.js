//https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let res = false;
    console.log(`arr is ${arr}`);
    arr.forEach( (e, i) => {
        console.log("i is "+i);
        console.log('e is '+e)
        console.log("index of res: "+arr.indexOf(e*2));
        //check if the double of e exists in the array
        if(arr.indexOf(e*2) !== -1){
            console.log('inside arr index loop');
            console.log('e*2 is '+e*2);
            console.log(arr.indexOf(e*2))
            //check we are not iterating over the same element
            if(arr.lastIndexOf(e*2) !== arr.indexOf(arr[i])){
                res = true
            }
            console.log('end arr index loop');
            }
        }
    )
    console.log(res);
    return res
};



//wrong [-2,0,10,-19,4,6,-8]
//expect false
// checkIfExist([-2,0,10,-19,4,6,-8])

//wrong [0,0]
//expect true
// checkIfExist([0,0])

// checkIfExist([10,2,5,3])
//expected true
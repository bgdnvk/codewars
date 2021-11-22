//https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let res = false;
    arr.forEach( e => {
        console.log('e is '+e)
        console.log(arr.indexOf(e*2))
        if(arr.indexOf(e*2) !== -1 && e*2 !==0){
            console.log('found')
            console.log(e*2);
            console.log(arr.indexOf(e*2))
            res = true
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
checkIfExist([0,0])
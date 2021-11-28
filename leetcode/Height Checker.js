//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {

    //first copy the array using the spread operator
    //then sort the array to check the differences
    const sorted = [...heights].sort((a,b) => a - b)

    console.log(heights);
    console.log(sorted);
    //counter for the different elements
    let diffCount = 0;
    for(let i = 0; i<heights.length; i++){
        if(heights[i] !== sorted[i]){
            console.log("diff");
            diffCount++;
        }
    }
    console.log(diffCount);
    return diffCount;
};

heightChecker([1,1,4,2,1,3]);
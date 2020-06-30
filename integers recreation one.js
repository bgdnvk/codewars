//https://www.codewars.com/kata/55aa075506463dac6600010d/javascript
/**
 * Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
 */
function listSquared(m, n) {
    let resultArr = [];
    for(;m<=n;m++){
        let divisorSum = getSquaredDivisors(m);
        if(isSquare(divisorSum)){
            resultArr.push([m, divisorSum]);
        }
    }
    console.log(resultArr);
    
    return resultArr;
}

const isSquare = (x) => {
   return x > 0 && Math.sqrt(x)%1 === 0;
}
// console.log("issquare result "+isSquare(42));
// console.log("issquare result "+isSquare(2500));

const isDivisor = (n, divisor) =>{
    return n > 0 && !(n%divisor);
}
// console.log(isDivisor(42,21));

function getSquaredDivisors(m){
    let divisibleNums = [];

    for(let i = 1; i<=m;i++){
        // console.log("i is: "+i);
        
        if(isDivisor(m,i)){
            // console.log("inside i I is: "+i);
            divisibleNums.push(i*i);
        }
    }
    // console.log(divisibleNums);
    let reduced_arr = divisibleNums.reduce((acc, curr) => acc+curr);

    // console.log(reduced_arr);

    
    return reduced_arr;
}


listSquared(42, 250);
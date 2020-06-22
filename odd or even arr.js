//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
/**
 * Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
 */
function oddOrEven(array) {
    //enter code here
    if(array.length === 0) return "even";
    const reducer = (acc, curr) => acc + curr;
    const nums = array.reduce(reducer);
    return nums%2 ? "odd": "even";
    
 }

 oddOrEven([1023, 1, 2]);
//https://www.codewars.com/kata/53c93982689f84e321000d62/train/javascript
//https://stackoverflow.com/questions/61817528/vscode-no-debug-adapter-can-not-send-variables

const assert = require('chai').assert

function getAllPrimeFactors(n) { 
    const arr = []

}
//Test.assertSimilar(getAllPrimeFactors(100), [2,2,5,5]);
//assert.equal(getAllPrimeFactors(100), [2,2,5,5]);

// https://stackoverflow.com/questions/39429564/to-find-a-number-is-prime-why-checking-till-n-2-is-better-what-is-the-reason-f
const isPrime = (n) => {
    for(let i = 2; i <= n/2; i++){
        console.log(i);
       if(n % i === 0){
          return false;
       }
    };
    return true;
 };

console.log(isPrime(25)); 

//https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
/**
 * Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

where a ** b means a to the power of b

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */
function primeFactors(n) {
    if (!n || n < 2)
      return [];
  
    let f = [];
    let prev = 2, counter = -1, arrayCount = [];
  
    for (var i = 2; i <= n; i++){
  //   console.log("i is: "+i);
      
      while (n % i === 0){
        console.log(`prev is ${prev} and i is ${i}`);
        f.push(i);
        n /= i;
      }
    }
    
    let newArr = [];
    let temp;
    temp = f[0];
    let count = 0;
  
    for(let i = 0; i < f.length;i++){
  
      if(temp === f[i]){
        count++;  
      } else{
        newArr.push([temp, count]);
        count = 1;
        temp = f[i];
      }
  
      if (i === f.length -1){
        newArr.push([temp, count]);
      }    
  
    }
    console.log(newArr);
    console.log(f);
  
    let res = [];
    for(e of newArr){
      console.log(e)
      if(e[1] >= 2){
        res.push("("+e[0]+"**"+e[1]+")");
      } else{
        res.push("("+e[0]+")");
      }
    }
  
    return res.join("");
  };
  
  
  
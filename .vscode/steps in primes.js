//https://www.codewars.com/kata/5613d06cee1e7da6d5000055/train/javascript
function step(g, m, n) {
    // your code
  let primeArr = [];
  
  for (let i = m; i <= n; i++){
    if (i % 2 !== 0){
      primeArr.push(i);
    }
  }
  console.log(primeArr)
  
  for(let i = 0; i < primeArr.length; i++){
    for (let j = i+1; j < primeArr.length; j++){
      if (primeArr[j] - primeArr[i] === g){
        return [primeArr[i], primeArr[j]];
      }
    }
  }
  
}
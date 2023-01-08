const tribonacci = (n, memo={}) => {
    if(n in memo) return memo[n]
    if(n === 0 || n === 1) return 0
    if(n === 2) return 1
    memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
    return memo[n]
  };
  
  module.exports = {
    tribonacci,
  };
  
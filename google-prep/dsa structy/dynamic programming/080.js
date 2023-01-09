const summingSquares = (n, memo={}) => {
    if(n === 0) return 0
    if(n in memo) return memo[n]
    
    let min = Infinity
    for(let i = 1; i <= Math.sqrt(n); i++) {
      const square = i*i
      let res = 1+ summingSquares(n-square, memo)
      min = Math.min(res, min)
    }
    memo[n] = min
    return memo[n]
  };
  
  module.exports = {
    summingSquares,
  };
  
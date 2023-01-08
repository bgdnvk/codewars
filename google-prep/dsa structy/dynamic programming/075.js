const sumPossible = (amount, numbers, memo = {}) => {
    // todo
    if(amount === 0) return true
    if(amount < 0) return false
    
    if(amount in memo) return memo[amount]
    
    for(let num of numbers) {
      if(sumPossible(amount-num, numbers, memo)) {
        memo[amount] = true
        return true
      }
      
    }
     
    memo[amount] = false
    return false
  };
  
  module.exports = {
    sumPossible,
  };
  
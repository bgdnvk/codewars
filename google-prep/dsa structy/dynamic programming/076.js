const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    return answer === Infinity ? -1 : answer;
  };
  
  const _minChange = (amount, coins, memo = {}) => {
    if (amount < 0) return Infinity;
    
    if (amount === 0) return 0;
    
    if (amount in memo) return memo[amount];
    
    let min = Infinity;
    for (let coin of coins) {
      const numCoins = 1 + _minChange(amount - coin, coins, memo);
      min = Math.min(numCoins, min);
    }
    return memo[amount] = min;
  };
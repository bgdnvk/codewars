const arrayStepper = (nums, i = 0, memo = {}) => {
    if(i in memo) return memo[i]
    if(i >= nums.length -1) return true
    
    const maxStep = nums[i]
    for(let step = 1; step <= maxStep; step++) {
      if(arrayStepper(nums, i+step, memo) === true) {
        memo[i] = true
        return true
      }
    }
    memo[i] = false
    return memo[i]
  };
  
  module.exports = {
    arrayStepper,
  };
  
const pairSum = (numbers, targetSum) => {
    // todo
    let map = {}
    
    for(let i = 0; i < numbers.length; i++){
      let res = targetSum - numbers[i]
      if (res in map) {
        return [i, map[res]]
      } else {
        map[numbers[i]] = i
      }
    }
    
  };
  
  module.exports = {
    pairSum,
  };
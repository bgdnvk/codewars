const pairSum = (numbers, targetSum) => {
    // todo
    for(let i = 0; i < numbers.length; i++){
      for(let j = 1; j < numbers.length; j++){
        if(numbers[i]+numbers[j] === targetSum){
          return [i, j]
        }
      }
    }
  };
  
  module.exports = {
    pairSum,
  };
  
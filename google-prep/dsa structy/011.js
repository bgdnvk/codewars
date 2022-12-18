const pairProduct = (numbers, targetProduct) => {
    // todo
    let map = {}
    console.log(numbers)
    for(let i = 0; i < numbers.length; i++) {
      let res = targetProduct / numbers[i]
  
      if(map[res]) {
        return [i, map[res]]
      }
      map[numbers[i]] = i
    }
  };
  
  module.exports = {
    pairProduct,
  };
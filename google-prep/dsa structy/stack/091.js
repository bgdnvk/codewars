const pairedParentheses = (str) => {
    let count = 0
    for(char of str) {
      console.log(char)
      console.log(count)
      if(char === '(') count++
      if(count <= 0) return false
      if(char === ')') count--
    }
    return count === 0
  };
  
  module.exports = {
    pairedParentheses,
  };
  
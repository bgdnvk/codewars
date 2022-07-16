//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function(n) {
    // Program Me
    //wat https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
    // console.log(...n.toString(2))
  //   const binaryArr = [...n.toString(2)]
  //   const newArr = binaryArr.map(e => parseInt(e)).reduce((prev, next) => prev + next)
    return [...n.toString(2)].map(e => parseInt(e)).reduce((prev, next) => prev + next)
  };
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
    if(!node) return -1 
    let count = 1 
    const L = howHigh(node.left)
    const R = howHigh(node.right)
    return count + Math.max(L, R)
    
  };
  
  module.exports = {
    howHigh,
  };
  
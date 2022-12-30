// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
    const queue = [root]
    let curr = null
    while(queue.length > 0) {
      curr = queue.shift()
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    return curr.val
  };
  
  module.exports = {
    bottomRightValue,
  };
  
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    let min = root.val 
    let queue = [root]
    while(queue.length !== 0){
      const curr = queue.shift()
      if(curr.val < min) {
        min = curr.val
      }
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    return min
  };
  
  module.exports = {
    treeMinValue,
  };
  
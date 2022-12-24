// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
    if(!root) return false 
    
    const queue = [root]
    while(queue.length !== 0){
      const curr = queue.shift()
      if(curr.val === target){
        return true
      }
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    return false
  };
  
  module.exports = {
    treeIncludes,
  };
  
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  
    if(!root) return 0
    
    let sum = 0
    const queue = [root] 
    while(queue.length !== 0){
      let curr = queue.shift()  
      sum+=curr.val
      
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    return sum
  };
  
  module.exports = {
    treeSum,
  };
  
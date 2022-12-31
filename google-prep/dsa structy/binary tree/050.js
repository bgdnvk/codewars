// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
    if(!root) return []
    const stack = [root]
    const res = []
    while(stack.length > 0){
      const curr = stack.pop()
      
      if(curr.left === null && curr.right === null) res.push(curr.val)
      
      if(curr.right) stack.push(curr.right)
      if(curr.left) stack.push(curr.left)
    }
    return res
  };
  
  module.exports = {
    leafList,
  };
  
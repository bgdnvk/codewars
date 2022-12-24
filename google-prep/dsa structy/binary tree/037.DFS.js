// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
    if(root === null) return []
    let stack = [root]
    let res = []
    while(stack.length > 0) {
      let last = stack.pop()
      res.push(last.val)
      if(last.right) stack.push(last.right)
      if(last.left) stack.push(last.left)
    }
    return res
  };
  
  module.exports = {
    depthFirstValues,
  };
  
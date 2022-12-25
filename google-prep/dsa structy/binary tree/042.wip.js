// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
    const stack = [root]
    const res = []
    let maxPath = 0
    let currPath = 0
    while(stack.length !== 0){
      let curr = stack.pop()
      res.push(curr.val)
      currPath += curr.val
      
      if(curr.left) stack.push(curr.left)
      if(curr.right) stack.push(curr.right)
      
      if(!curr.left && !curr.right){
        console.log(currPath)
        maxPath = currPath > maxPath ? currPath: maxPath
        currPath = 0
      }
    }
    console.log(res)
    return maxPath
  };
  
  module.exports = {
    maxPathSum,
  };
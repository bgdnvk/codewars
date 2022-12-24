// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    if(!root) return []
    
    const queue = [root]
    const res = []
    
    while(queue.length !== 0){
      let curr = queue.pop()
      console.log(curr)
      res.push(curr.val)
      
      if(curr.left) queue.unshift(curr.left)
      if(curr.right) queue.unshift(curr.right)
      console.log(queue)
    }
    return res
  };
  
  module.exports = {
    breadthFirstValues,
  };
  
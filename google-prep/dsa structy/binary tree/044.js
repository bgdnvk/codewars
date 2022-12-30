// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    console.log(root)
    if(!root) return 0
    let count = 0
    if(root.val === target) count = count+1
    return count + treeValueCount(root.left, target) + treeValueCount(root.right, target)
  };
  
  module.exports = {
    treeValueCount,
  };
  
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
    if(!root) return []
    if(root.left === null && root.right === null) return [[root.val]]
    const paths = []
    
    const L = allTreePaths(root.left)
    for(let p of L){
      paths.push([root.val, ...p])
    }
    
    const R = allTreePaths(root.right)
    for(let p of R){
      paths.push([root.val, ...p])
    }
    
    return paths
  };
  
  module.exports = {
    allTreePaths,
  };
  
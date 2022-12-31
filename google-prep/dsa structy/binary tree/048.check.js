// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root) => {
    // todo
    if(!root) return []
    
    const queue = [{ele: root, lvl: 0}]
    const levels = []
    let lvl = 0
    while(queue.length > 0){
      const curr = queue.shift()
      console.log(curr)
      if(levels.length === curr.lvl){
        levels[curr.lvl] = [curr.ele.val]
      } else {
        levels[curr.lvl].push(curr.ele.val)
      }
      
      if(curr.ele.left) queue.push({ele: curr.ele.left, lvl: curr.lvl + 1})
      if(curr.ele.right) queue.push({ele: curr.ele.right, lvl: curr.lvl + 1})
    }
    return levels
  };
  
  module.exports = {
    treeLevels,
  };
  
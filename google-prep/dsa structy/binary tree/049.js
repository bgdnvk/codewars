// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
    if(!root) return []
    
    const queue = [{e: root, lvl: 0}]
    const levels = []
    while(queue.length > 0) {
      let curr = queue.shift()
      
      if(levels.length === curr.lvl){
        levels[curr.lvl] = [curr.e.val]
      } else {
        levels[curr.lvl].push(curr.e.val)
      }
      
      if(curr.e.left) queue.push({e: curr.e.left, lvl: curr.lvl + 1})
      if(curr.e.right) queue.push({e: curr.e.right, lvl: curr.lvl + 1})
    }
    console.log(levels)
    let avgLvls = []
    for(let l of levels){
      avgLvls.push(avg(l))
    }
    return avgLvls
  };
  
  const avg = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length;i++) {
      sum+=arr[i]
    }
    return sum/arr.length
  }
  
  module.exports = {
    levelAverages,
  };
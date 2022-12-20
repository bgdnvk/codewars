// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

class Node {
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  const linkedListValues = (head) => {
    // todo
    let res = []
    let curr = head
    while(curr!= null){
      console.log(curr.val)
      res.push(curr.val) 
      curr = curr.next
    }
    return res
  };
  
  module.exports = {
    linkedListValues,
  };
  
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
    // todo
    let curr = head
    let prev = null
    while(curr !== null){
      console.log(curr)
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    } 
    return prev
  };
  
  module.exports = {
    reverseList,
  };
  
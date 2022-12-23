// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
    if(head.val === targetVal) return head.next
    let res = head
    let prev = null
    while(head !== null){
      
      if(head.val === targetVal){
        prev.next = head.next
        break
      }
      prev = head
      head = head.next
    }
    return res 
  };
  
  module.exports = {
    removeNode,
  };
  
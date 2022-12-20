// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//const linkedListFind = (head, target) => {
//  // todo
//  let curr = head
//  while(curr !== null){
//    if(curr.val === target){
//      return true
//    }
//    curr = curr.next
//  }
//  return false
//};
//
const linkedListFind = (head, target) => {
    if (head === null) return false
    if (head.val === target) return true
    return linkedListFind(head.next, target)
  }
  module.exports = {
    linkedListFind,
  };
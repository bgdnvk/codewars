// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//const sumList = (head) => {
//  // todo
//  let curr = head
//  let sum = 0
//  while(curr !== null){
//   sum += curr.val 
//   curr = curr.next 
//  }
//  return sum
//};
//

const sumList = (head) => {
    if(head === null) return 0
    return head.val + sumList(head.next)
  }
  module.exports = {
    sumList,
  };
  
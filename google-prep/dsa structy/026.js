// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
    // todo
    let e = head.val
    let start = head.next
    while(start !== null){
     if(start.val !== e) {
       return false
     }
      start = start.next
    }
    return true
  };
  
  module.exports = {
    isUnivalueList,
  };
  
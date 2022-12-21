// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
    // todo
    let tail = head1
    let c1 = head1.next
    let c2 = head2
    let count = 0
    while(c1 !== null && c2 !== null){
      console.log('c1', c1)
      console.log('c2', c2)
      console.log('tail', tail) 
      
      if(count % 2 === 0){
        tail.next = c2
        c2 = c2.next
      } else {
        tail.next = c1
        c1 = c1.next
      }
      count++
      tail = tail.next
    }
    if(c1 === null) tail.next = c2
    if(c2 === null) tail.next = c1
    return head1
  };
  
  module.exports = {
    zipperLists,
  };
  
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const mergeLists = (head1, head2) => {
    let head = new Node(null)
    let tail = head
    let p1 = head1
    let p2 = head2
    while(p1 !== null && p2 !== null){
      if(p1.val < p2.val){
        tail.next = p1
        p1 = p1.next
      } else {
        tail.next = p2
        p2 = p2.next
      }
      tail = tail.next
      console.log(tail)
    }
    if(p1 === null) tail.next = p2
    if(p2 === null ) tail.next = p1
    return head.next
  };
  
  module.exports = {
    mergeLists,
  };
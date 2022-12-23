class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const createLinkedList = (values) => {
    // todo
    if(values.length === 0) return null
    
    let head = new Node(values[0])
    let current = head
    
    for(let i = 1; i < values.length; i++){
      let node = new Node(values[i])
      current.next = node
      current = current.next
    }
    return head
  };
  
  module.exports = {
    createLinkedList,
  };
  
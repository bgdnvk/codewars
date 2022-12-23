class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const insertNode = (head, value, index) => {
    // todo
    let res = head
    let prev = null
    let count = 0
    let newNode = new Node(value)
    if(index === 0){
      newNode.next = head
      return newNode
    }
    while(head !== null){
      if(count === index){
        prev.next = newNode
        newNode.next = head
        return res
      }
      
       
      
      count += 1 
      prev = head
      head = head.next
    }
    console.log(count)
    console.log(index)
    if(count <= index) {
      prev.next = newNode
    }
    return res 
  };
  
  module.exports = {
    insertNode,
  };
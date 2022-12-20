// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    // todo
    let curr = head
    for(let i = 0; i <= index; i++){
      if(curr === null) return null
      
      if(i === index){
        return curr.val
      }
      curr = curr.next
    }
    return null
  };
  
  module.exports = {
    getNodeValue,
  };
  
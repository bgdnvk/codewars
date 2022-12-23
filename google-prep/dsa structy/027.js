// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  
    let maxStreak = 0
    let currStreak = 0
    let prevVal = null
    while(head !== null){
      
      if(prevVal === head.val){
        currStreak += 1
      } else {
        currStreak = 1
      }
      
      
      if(currStreak > maxStreak){
        maxStreak = currStreak
      }
      prevVal = head.val
      head = head.next
    }
    return maxStreak
  };
  
  module.exports = {
    longestStreak,
  };
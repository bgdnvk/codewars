class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  console.log('start')
  let r1 = reverseList(head1)
  let r2 = reverseList(head2)
  let sum1 = getNum(r1)
  let sum2 = getNum(r2)
  console.log(sum1, sum2)
  let sum = sum1+sum2
  let sumList = newList(sum)
  console.log(sumList)
  //return sumList
  let res = reverseList(sumList)
  console.log('res is', res)
  return res
};

const reverseList = (head) => {
  console.log('reverseList')
  let curr = head 
  let prev = null
  while(curr !== null){
    
    const next = curr.next
    curr.next = prev
    prev = curr 
    curr = next 
  }
  
  return prev
}

const getNum = (head) => {
  console.log('getNum')
  let curr = head
  let arr = []
  while(curr !== null){
    arr.push(curr.val)
    curr = curr.next
  }
  let s = arr.join('')
  let n = parseInt(s)
  return n
}

const newList = (sum) => {
  console.log('newList sum: ',sum)
  let s = sum.toString()
  let head = new Node(null)
  let curr = head
  for(let i = 0; i < s.length; i++){
    let n = new Node(parseInt(s[i]))
    curr.next = n
    curr= curr.next
    console.log('curr FOR',curr)
  }
  console.log('curr is',curr)
  console.log('returning head')
  console.log(head)
  return head.next
}

module.exports = {
  addLists,
};

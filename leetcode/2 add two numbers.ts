//https://leetcode.com/problems/add-two-numbers/description/
// Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null { 
    let current = new ListNode()
    let res = current
    let carry = 0

    while(l1 || l2 || carry) {
        let x = l1? l1.val: 0
        let y = l2? l2.val: 0
        let sum = x + y + carry
        carry = 0

//        console.log('initial sum', sum)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next

        if(sum > 9) {
            sum = sum%10
            carry = 1
//            console.log('carry:', carry)
//            console.log('sum:', sum)
        }


        const nextNode = new ListNode(sum)
        current.next = nextNode
        current = nextNode

        if(!l1) {
            current.next = l2
        }
        if(!l2) {
            current.next = l1
        }
    }

    return res.next 
};
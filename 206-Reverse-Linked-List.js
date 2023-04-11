
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head
  while(current) {
    const nextNode = current.next
    current.next = prev

    prev = current
    current = nextNode
  }
  return prev
};
//            [1, 2, 3, 4]
// step 1   p  c  n
const linkedList = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));
console.log(linkedList)
console.log(reverseList(linkedList))

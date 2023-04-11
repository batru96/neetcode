// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createListFromArray(nums = []) {
  const list = new ListNode()

  const nodes = nums.map(item => new ListNode(item))
  console.log(nodes)

  return list
}

createListFromArray([3, 5, 4])

var addTwoNumbers = function (l1, l2) {
};
let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7, null))))

let l3 
let memory = 0
while (l1 || l2) {
  const l1Value = (l1 && l1.val) ? l1.val : 0
  const l2Value = (l2 && l2.val) ? l2.val : 0

  const sum = l1Value + l2Value + memory
  if (sum < 10) {
    memory = 0
    l3.val = sum
  } else {
    memory = 1
    l3.val = sum % 10
  }
  l3.next = new ListNode()

  if (l1 && l1.next) {
    l1 = l1.next
  } else {
    l1 = null
  }
  if (l2 && l2.next) {
    l2 = l2.next
  } else {
    l2 = null
  }
  l3 = l3.next
}

console.log({ l3 })

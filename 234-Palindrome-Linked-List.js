
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {String}
 */
function toString(head) {
  let str = ''

  while(head) {
    str += head.val
    head = head.next
  }
  return str
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const str = toString(head)
  const length = str.length
  const middle = (length - 1) / 2

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[length - 1 - i]) return false
  }

  return true
};

var isPalindrome2 = function (head) {
  let str1 = ''
  let str2 = ''

  while(head) {
    str1 += head.val
    str2 = head.val + str2

    head = head.next
  }

  return str1 === str2
};


const linkedList = new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1)))));
console.log(isPalindrome2(linkedList))
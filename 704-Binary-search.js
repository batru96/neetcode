/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // console.log({ left, right })
  while (left <= right) {
    const middleIdx = Math.floor((right + left) / 2);
    // console.log(middleIdx)
    const middle = nums[middleIdx]
    if (middle === target) {
      return middleIdx;
    } else if (middle < target) {
      left = middleIdx + 1
      // console.log('left', left)
      // return 'left'
    } else {
      right = middleIdx - 1
      // console.log(right)
      // return 'right'
    }
  }
  return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
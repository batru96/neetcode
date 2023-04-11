/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  let left = 0;
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.round((left + right) / 2)
    if (mid === left || mid === right) return mid

    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      right = mid
    } else {
      left = mid
    }
  }
};
console.log(searchInsert([1, 3, 5, 6], 1))



/**
1,3,5,6 ---- 1
l = 0, r = 3 => mid = 2

l = 0, r = 2 => mid = 1

l = 0, r = 1 => mid = 1

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const mapCountNumbers = countNumbers(nums)

  let result = []
  for (const key in mapCountNumbers) {
    result.push({ key, value: mapCountNumbers[key]})
    }

  result.sort((a, b) => {
    return a.value > b.value ? -1 : 1
  })

  result = result.filter((_, index) => index < k).map(item => parseInt(item.key))

  return result
};

function countNumbers(nums = []) {
  const map = {}

  for (const item of nums) {
    if (map[item]) {
      map[item] += 1
    } else {
      map[item] = 1;
    }
  }

  return map
}

topKFrequent([1, 1, 1, 2, 2, 3], 2)
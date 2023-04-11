function swap(s, i, j) {
  const temp = s[i]
  s[i] = s[j]
  s[j] = temp
}

/**
 * 
 * @param {number[]} s 
 */
function bubbleSort(s) {
  for (let i = 0; i < s.length - 1; i++) {
    console.log('Step:', i)
    for (let j = 0; j < s.length; j++) {
      if (s[j - 1] > s[j]) {
        swap(s, j - 1, j)
      }
      console.log('Child step:', s)
    }
    // console.log('Step:', s)
  }
}

const input = [4, 3, 2, 1, 5, 0]
bubbleSort(input)
// console.log(input)

// [4, 3, 2, 1, 5, 0]
// [3, 4, 2, 1, 5, 0]


// []
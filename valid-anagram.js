/** 
* @param {string} s
* @return {Map}
*/
function countLetters(s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const item = s[i]

    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }

  return map
}

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const mapS = countLetters(s)

  for (let i = 0; i < t.length; i++) {
    const item = t[i]
    if (mapS.has(item)) {
      if (mapS.get(item) === 1) {
        mapS.delete(item)
      } else {
        mapS.set(item, mapS.get(item) - 1)
      }
    } else {
      return false
    }
  }
  return true
};

console.log(
isAnagram('tbuna', 'tanua'))
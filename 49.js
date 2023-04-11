const strs = ["bdddddddddd","bbbbbbbbbbc"]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const stringKey = createStringKeyToCountCharacters(str);
    console.log(stringKey)

    if (map[stringKey] && Array.isArray(map[stringKey])) {
      map[stringKey].push(str)
    } else {
      map[stringKey] = [str]
    }
  }
  console.log(map)

  const result = []
  for (const item of Object.values(map)) {
    result.push(item)
  }
  return result
};

groupAnagrams(strs)

function createStringKeyToCountCharacters(str) {
  const array = []

  for (let i = 0; i < 26; i++) {
    array.push(0)
  }

  for (let charIndex = 0; charIndex < str.length; charIndex++) {
    const charCodeIndex = str[charIndex].charCodeAt(0) - 'a'.charCodeAt(0)
    array[charCodeIndex] = array[charCodeIndex] + 1
  }

  return array.join('-')
}



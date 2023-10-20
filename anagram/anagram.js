function anagram(str1, str2) {
  const aCharMap = buildcharMap(str1);
  const beCharMap = buildcharMap(str2);

  if (Object.keys(aCharMap).length !== Object.keys(beCharMap).length) {
    console.log(Object.keys(aCharMap));
    console.log(Object.keys(beCharMap));
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== beCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildcharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// anagram("dog", "god");

module.exports = anagram;

// function palindrome(str) {
//   const reversedString = str.split("").reverse().join("");
//   return reversedString === str;
// }

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;

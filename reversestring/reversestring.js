// function reverseString(str) {
//   const arrayFromString = str.split("");
//   //   console.log(arrayFromString);
//   const reversedArrayFromString = arrayFromString.reverse();
//   //   console.log(reversedArrayFromString);
//   const reversedString = reversedArrayFromString.join("");
//   //   console.log(reversedString);
//   return reversedString;
// }

// function reverseString(str) {
//   let reversedString = "";

//   for (let char of str) {
//     console.log("char", char);
//     console.log("reverseString", reversedString);

//     reversedString = char + reversedString;
//   }
//   return reversedString;
// }

function reverseString(str) {
  const splittedString = str.split("");
  return splittedString.reduce((acc, rec) => rec + acc);
}

console.log(reverseString("hello world"));

module.exports = reverseString;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My Solution
// function reverse(str) {
//   let reversed = "";
//   let index = str.length - 1;
//   for (index; index >= 0; index--) {
//     reversed = reversed.concat(str[index]);
//   }
//   return reversed.toString();
// }

// Another Solution
// function reverse(str) {
//   let reversed = "";
//   for (var char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  let arr = str.split("");
  return arr.reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

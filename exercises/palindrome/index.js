// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Best Solution
  //   return str === str.split("").reverse().join("");

  // Another solution using array helper "every"
  // Issue: this solutions does twice the work that is required since it checks every value to the end
  // when only half way is needed.
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

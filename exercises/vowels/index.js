// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // SOLUTION 1
  return str.replace(/[^aeiou]/gi, "").length;
  //////////////////////////////////////////////

  // SOLUTION 2
  // let counter = 0;
  // let checkValues = ["a", "e", "i", "o", "u"];

  // for (let char of str) {
  //   if (checkValues.includes(char.toLowerCase())) counter++;
  // }

  // return counter;
  //
  //////////////////////////////////////
  // SOLUTION 3
  // let vowelCount = 0;
  // let re = new RegExp("[A,E,I,O,U]", "i");
  //
  // for (char of str) {
  //   if (re.test(char)) vowelCount++;
  // }
  // return vowelCount;
}

module.exports = vowels;

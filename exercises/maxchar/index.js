// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ********** THIS TYPE OF MAPPING CAN BE USED WITH ANYTHING RE: REPEATING VALUES/CHARACTERS***************

function maxChar(str) {
  let charObj = {};
  let maxValue = 0;
  let maxChar = null;

  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  for (let prop in charObj) {
    if (charObj.hasOwnProperty(prop)) {
      let val = charObj[prop];
      if (val >= maxValue) {
        maxValue = val;
        maxChar = prop;
      }
    }
  }

  return maxChar;
}

module.exports = maxChar;

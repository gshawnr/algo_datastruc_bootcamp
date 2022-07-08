// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // convert to postive number
  let multiplier = Math.sign(n);
  n = n * multiplier;

  let revInt = parseInt(n.toString().split("").reverse().join(""), 10);

  // add sign back
  return revInt * multiplier;
}

module.exports = reverseInt;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTIONS
// Iterative
// Recursive

function steps(n, row = 0, stair = "") {
  // base case row === n
  if (row === n) {
    return;
  }

  // if stair is complete log it and make recursive call
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // add # or " " to stair and call
  let add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

module.exports = steps;

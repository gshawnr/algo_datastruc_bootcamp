// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
function pyramid(n, row = 0, level = "") {
  /////////////////////////////////////////////////////////////////////
  // RECURSIVE SOLUTION
  // base case => row = n;;
  if (n === row) {
    return;
  }

  let totalCol = 2 * n - 1;
  let midPoint = Math.floor(totalCol / 2);

  if (level.length === totalCol) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let length = level.length;
  level += length < midPoint - row || length > midPoint + row ? " " : "#";
  pyramid(n, row, level);

  ////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////
  // ITERATIVE SOLUTION

  // let totalCols = 2 * n - 1;

  // // Since cols are 0 indexed, use Math.floor instead of Math.ceil
  // let midPoint = Math.floor(totalCols / 2);

  // for (let row = 0; row < n; row++) {
  //   let level = "";

  //   let symStart = midPoint - row;
  //   let symEnd = midPoint + row;
  //   for (let i = 0; i < totalCols; i++) {
  //     if (i < symStart || i > symEnd) {
  //       level += " ";
  //     } else {
  //       level += "#";
  //     }
  //   }

  //   console.log(level);
  // }
  ///////////////////////////////////////////////////////////////////
}

module.exports = pyramid;

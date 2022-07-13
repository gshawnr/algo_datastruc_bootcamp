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

////////// MY SOLUTION //////////////////
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let sym = stringGenerator(i, "#");
//     let space = stringGenerator(n - i, " ");

//     console.log(sym + space);
//   }
// }

// const stringGenerator = (num, type) => {
//   let res = "";
//   for (let i = 1; i <= num; i++) {
//     res = res + type;
//   }

//   return res;
// };
///////////////////////////////////////////

// SOLUTION 2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else stair += " ";
//     }

//     console.log(stair);
//   }
// }

// SOLUTION 3 RECURSION
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

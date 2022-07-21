// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

///////////////////////////////////////////////////////////
// RECURSION WITH MEMOIZATION
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoization(slowFib);

function memoization(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

/////////////////////////////////////////////////////////////
// // RECURSIVE SOLUTION
// function fib(n) {
//   // base case n < 2;
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 2) + fib(n - 1);
// }
// // NOTE: HOW CAN WE IMPROVE THE EXPONENTIAL RUNTIME -> MEMOIZATION!
//////////////////////////////////////////////////////////////
// ITERATIVE SOLUTION
// function fib(n) {
//   let result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     let prev = result[i - 2];
//     let curr = result[i - 1];
//     result.push(prev + curr);
//   }
//   return result[n];
// }

module.exports = fib;

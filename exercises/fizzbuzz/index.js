// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let value = i;
    let fizz = i % 3 === 0 ? "fizz" : null;
    let buzz = i % 5 === 0 ? "buzz" : null;

    if (fizz && buzz) value = "fizzbuzz";
    else if (fizz) value = "fizz";
    else if (buzz) value = "buzz";

    console.log(value);
  }
}

module.exports = fizzBuzz;

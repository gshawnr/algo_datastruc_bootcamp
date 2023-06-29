// write a function to retrive the sum of the two largest integers from an input array
// use the more scalable method (ie not array sort)

function maxInts(arr) {
  if (arr.length < 2) return null;

  let maxInts = [];
  let maxIndexes = [];

  for (let i = 0; i < 2; i++) {
    let { max, index } = getMax(arr, maxIndexes);
    maxInts.push(max);
    maxIndexes.push(index);
  }

  let sum = null;
  for (let val of maxInts) {
    sum += val;
  }
  return sum;
}

function getMax(arr, indexesToExclude) {
  let maxInt;
  let maxIndex;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (!maxInt) {
      maxInt = val;
      maxIndex = i;
    }

    if (val > maxInt && !indexesToExclude.includes(i)) {
      maxInt = val;
      maxIndex = i;
    }
  }

  return { max: maxInt, index: maxIndex };
}
module.exports = maxInts;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// NOTES:
// Should handle the "Starting case" first with your push - ie chunked = 0 should be the if not the else

function chunk(array, size) {
  // SOLUTION 1
  //   let chunked = [];
  //   let chunkedIndex = 0;
  //   let currChunkLength = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (currChunkLength !== 0 && currChunkLength < size) {
  //       chunked[chunkedIndex].push(array[i]);
  //       currChunkLength = chunked[chunkedIndex].length;
  //     } else {
  //       chunked.push([array[i]]);
  //       chunkedIndex = chunked.length - 1;
  //       currChunkLength = chunked[chunkedIndex].length;
  //     }
  //   }
  //   return chunked;

  // SOLUTION 2
  let chunked = [];
  let start = 0;

  while (start <= array.length - 1) {
    chunked.push(array.slice(start, start + size));
    start = start + size;
  }
  return chunked;
}

module.exports = chunk;

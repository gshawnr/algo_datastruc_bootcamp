function getPermutations(str, idx) {
  if (str.length - idx === 1) {
    console.log(str);
    return;
  }

  for (let i = idx; i < str.length; i++) {
    const permStr = swap(str, idx, i);
    getPermutations(permStr, idx + 1);
  }
}

function swap(str, idxA, idxB) {
  const strArr = str.split("");
  let charA = strArr[idxA];
  strArr[idxA] = strArr[idxB];
  strArr[idxB] = charA;
  return strArr.join("");
}

getPermutations("abcde", 0);

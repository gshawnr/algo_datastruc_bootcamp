// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str
    .replace(/[^A-Za-z]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

// SOLUTION 1
// function anagrams(stringA, stringB) {
//     let aDict = strToDict(stringA);
//     let bDict = strToDict(stringB);

//     if (Object.keys(aDict).length !== Object.keys(bDict).length) return false;

//     for (let key in aDict) {
//       let val = aDict[key];
//       if (!bDict[key] || bDict[key] !== val) {
//         return false;
//       }
//     }
//     return true;
//   }

//   const strToDict = (str) => {
//     let formattedStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();

//     let dict = {};
//     for (let char of formattedStr) {
//       dict[char] = dict[char] + 1 || 1;
//     }

//     return dict;
//   };
module.exports = anagrams;

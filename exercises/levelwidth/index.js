// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [];
  let nextLevel = [root];

  while (nextLevel.length) {
    counters.push(nextLevel.length);
    let currentLevel = nextLevel;
    nextLevel = [];
    for (let node of currentLevel) {
      nextLevel.push(...node.children);
    }
  }
  return counters;
}

module.exports = levelWidth;

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {}
}

class LinkedList {
  constructor() {}

  insertFirst(data) {}

  size() {}

  getFirst() {}

  getLast() {}

  clear() {}

  removeFirst() {}

  removeLast() {}

  insertLast(data) {}

  getAt(index) {}

  removeAt(index) {}

  insertAt(data, position) {}

  forEach(fn) {
    let n = this.head;

    while (n) {
      fn(n);
      n = n.next;
    }
  }

  *[Symbol.iterator]() {
    let n = this.head;
    while (n) {
      yield n;
      n = n.next;
    }
  }
}

module.exports = { Node, LinkedList };

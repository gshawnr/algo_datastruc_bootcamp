// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let thisNode = this.head;
    let counter = 0;
    while (thisNode) {
      counter++;
      thisNode = thisNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let thisNode = this.head;
    while (thisNode.next) {
      thisNode = thisNode.next;
    }

    return thisNode;
  }

  clear() {
    let thisNode = this.head;
    while (thisNode.next) {
      let nextNode = thisNode.next;
      thisNode.next = null;
      thisNode = nextNode;
    }
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let penultimate = this.head;
    while (penultimate.next.next) {
      penultimate = penultimate.next;
    }
    penultimate.next = null;
  }

  insertLast(data) {
    // BETTER OPTION IS TO USE THE getLast() fnc
    let newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let n = this.head;
    while (n.next) {
      n = n.next;
    }

    n.next = newNode;
    return;
  }

  getAt(index) {
    let counter = 0;
    let n = this.head;
    while (n) {
      if (counter === index) {
        return n;
      }
      counter++;
      n = n.next;
    }

    return null;
  }

  removeAt(index) {
    // execution paths
    // list is empty -> return null
    // list only has head -> set new head to null, return existing head
    // travere to correct node -> set previous next to current next, return current

    // empty list
    if (!this.head) return null;

    let current = this.head;
    let previous;
    let counter = 0;

    while (counter !== index) {
      if (!current.next) {
        return null;
      }

      previous = current;
      current = current.next;
      counter++;
    }

    if (current === this.head) {
      this.head = this.head.next;
      return current;
    }

    previous.next = current.next;
    return current;
  }

  insertAt(data, position) {
    // case: position is head
    // case: position is outside of list length
    // case: valid
    let n = new Node(data);
    let current = this.head;
    let previous;
    let index = 0;

    if (position === 0) {
      n.next = this.head;
      this.head = n;
      return;
    }

    while (index !== position) {
      if (!current.next) {
        current.next = n;
        return;
      }

      previous = current;
      current = current.next;
      index++;
    }

    previous.next = n;
    n.next = current;
    return;
  }

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

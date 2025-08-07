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
    let ptr = this.head;
    let counter = 0;

    while (ptr) {
      counter++;
      ptr = ptr.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let ptr = this.head;
    let last = null;

    while (ptr) {
      last = ptr;
      ptr = ptr.next;
    }

    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head?.next || null;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let lastPtr = this.head.next;
    let penPtr = this.head;

    while (lastPtr) {
      if (!lastPtr.next) {
        penPtr.next = null;
        return;
      }
      penPtr = lastPtr;
      lastPtr = lastPtr.next;
    }
  }

  insertLast(data) {
    const n = new Node(data);
    if (!this.head) {
      this.head = n;
      return;
    }

    let ptr = this.head;
    while (ptr) {
      if (!ptr.next) {
        ptr.next = n;
        return;
      }
      ptr = ptr.next;
    }
  }

  getAt(index) {
    if (this.size() - 1 < index || index < 0) return null;

    let counter = 0;
    let ptr = this.head;

    while (counter < index) {
      ptr = ptr.next;
      counter++;
    }
    return ptr;
  }

  removeAt(index) {
    // handle err case index > size
    if (index > this.size() - 1) return null;

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let counter = 1;
    let ptr = this.head.next;
    let prevPtr = this.head;

    while (counter < index) {
      prevPtr = ptr;
      ptr = ptr.next;
      counter++;
    }

    prevPtr.next = ptr.next;
    return;
  }

  insertAt(data, position) {
    const n = new Node(data);

    if (position == 0 || !this.head) {
      n.next = this.head;
      this.head = n;
      return;
    }

    let ptr = this.head?.next || null;
    let prevPtr = this.head;
    let counter = 1;
    while (ptr && counter < position) {
      prevPtr = ptr;
      ptr = ptr.next;
      counter++;
    }

    prevPtr.next = n;
    n.next = ptr;
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

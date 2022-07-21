// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.primary = new Stack();
    this.helper = new Stack();
  }

  add(record) {
    this.primary.push(record);
    return;
  }

  peek() {
    while (this.primary.peek()) {
      this.helper.push(this.primary.pop());
    }

    let record = this.helper.peek();
    while (this.helper.peek()) {
      this.primary.push(this.helper.pop());
    }

    return record;
  }

  remove() {
    while (this.primary.peek()) {
      this.helper.push(this.primary.pop());
    }

    let record = this.helper.pop();

    while (this.helper.peek()) {
      this.primary.push(this.helper.pop());
    }

    return record;
  }
}

module.exports = Queue;

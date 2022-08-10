// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'right', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // base case: this.data = null;
    if (data < this.data && !this.left) {
      this.left = new Node(data);
    } else if (data < this.data) {
      this.left.insert(data);
    } else if (data > this.data && !this.right) {
      this.right = new Node(data);
    } else if (data > this.data) {
      this.right.insert(data);
    }
  }

  contains(data) {
    let node = null;

    if (this.data === data) node = this;

    if (data < this.data && !this.left) {
      node = null;
    } else if (data < this.data && this.left.data === data) {
      node = this.left;
    } else if (data < this.data) {
      node = this.left.contains(data);
    }

    if (data > this.data && !this.right) {
      node = null;
    } else if (data > this.data && this.right.data === data) {
      node = this.right;
    } else if (data > this.data) {
      this.right.contains(data);
    }

    return node;
  }
}

module.exports = Node;

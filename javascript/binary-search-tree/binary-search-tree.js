class BinarySearchTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor(data) {
    this.root = new BinarySearchTreeNode(data);
  }

  get data() {
    return this.root.data;
  }
  get right() {
    return this.root.right;
  }

  get left() {
    return this.root.left;
  }

  insert(data) {
    this.root = this._insert(this.root, data);
  }

  _insert(node, data) {
    if (node === null)  return new BinarySearchTreeNode(data);

    const cmp = data - node.data;
    if (cmp > 0)        node.right = this._insert(node.right, data);
    else if (cmp <= 0)  node.left = this._insert(node.left, data);
    
    return node;
  }

  each(callback) {
    this._inorder(this.root, callback);
  }

  _inorder(node, callback) {
    if (node === null)  return;

    this._inorder(node.left, callback);
    callback(node.data);
    this._inorder(node.right, callback);
  }
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    if (!this.head) {
      this.head = new LinkedListNode(data);
      this.tail = this.head;
    } else {
      const node = new LinkedListNode(data);
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  pop() {
    if (!this.size) return;

    const data = this.tail.data;

    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return data;
  }

  shift() {
    if (!this.size) return;

    const data = this.head.data;

    if (this.size == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return data;
  }

  unshift(data) {
    if (!this.head) {
      this.head = new LinkedListNode(data);
      this.tail = this.head;
    } else {
      const node = new LinkedListNode(data);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  _delete(head, data) {
    if (!head) return null;

    if (head.data === data) {
      if (head.next !== null) {
        head.next.prev = head.prev;
      } else {
        this.tail = this.tail.prev;
      }
      this.size--;
      return head.next;
    }

    head.next = this._delete(head.next, data);
    return head;
  }

  delete(data) {
    this.head = this._delete(this.head, data);
    if (!this.head) {
      this.tail = null;
    }
  }

  count() {
    return this.size;
  }
}

//
// You can find my solutions to other JavaScript challenges in my git repository.
// https://github.com/chandrakishorSingh/exercism-solutions/tree/master/javascript
//

export class List {
  constructor(arr) {
    this.values = [];

    if (arr) {
      for (let item of arr) {
        if (typeof(item) === 'object' && item.constructor === List) {
          this.values = [...this.values, ...item.values];
        } else {
          this.values = [...this.values, item];
        }
      }
    }
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    return new List([...this.values, ...list.values]);
  }

  filter(func) {
    let values = [];
    for (let ele of this.values) {
      if (func(ele)) {
      values = [...values, ele];
      }
    }
    return new List(values);
  }

  map(func) {
    let values = [];
    for (let ele of this.values) {
      values = [...values, func(ele)];
    }
    return new List(values);
  }

  length() {
    return this.values.length;
  }

  foldl(func, acc) {
    for (let ele of this.values) {
      acc = func(acc, ele);
    }
    return acc;
  }

  foldr(func, acc) {
    for (let i = this.values.length - 1; i > -1; i--) {
      acc = func(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let values = [];
    for (let i = this.values.length - 1; i > -1; i--) {
      values = [...values, this.values[i]];
    }
    return new List(values);
  }
}

import { List } from './list-ops';

describe('append entries to a list and return the new list', () => {
  test('empty lists', () => {
    const list1 = new List();
    const list2 = new List();
    expect(list1.append(list2)).toEqual(new List());
  });

  test('empty list to list', () => {
    const list1 = new List([1, 2, 3, 4]);
    const list2 = new List();
    expect(list1.append(list2)).toEqual(list1);
  });

  test('non-empty lists', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([2, 3, 4, 5]);
    expect(list1.append(list2).values).toEqual([1, 2, 2, 3, 4, 5]);
  });
});

describe('concat lists and lists of lists into new list', () => {
  test('empty list', () => {
    const list1 = new List();
    const list2 = new List();
    expect(list1.concat(list2).values).toEqual([]);
  });

  test('list of lists', () => {
    const list1 = new List([1, 2]);
    const list2 = new List([3]);
    const list3 = new List([]);
    const list4 = new List([4, 5, 6]);
    const listOfLists = new List([list2, list3, list4]);
    expect(list1.concat(listOfLists).values).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('filter list returning only values that satisfy the filter function', () => {
  test('empty list', () => {
    const list1 = new List([]);
    expect(list1.filter((el) => el % 2 === 1).values).toEqual([]);
  });

  test('non empty list', () => {
    const list1 = new List([1, 2, 3, 5]);
    expect(list1.filter((el) => el % 2 === 1).values).toEqual([1, 3, 5]);
  });
});

describe('returns the length of a list', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.length()).toEqual(0);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.length()).toEqual(4);
  });
});

describe('returns a list of elements whose values equal the list value transformed by the mapping function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.map((el) => ++el).values).toEqual([]);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 3, 5, 7]);
    expect(list1.map((el) => ++el).values).toEqual([2, 4, 6, 8]);
  });
});

describe('folds (reduces) the given list from the left with a function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.foldl((acc, el) => el * acc, 2)).toEqual(2);
  });

  test('direction independent function applied to non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldl((acc, el) => acc + el, 5)).toEqual(15);
  });

  test('direction dependent function applied to non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldl((acc, el) => el / acc, 24)).toEqual(64);
  });
});

describe('folds (reduces) the given list from the right with a function', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.foldr((acc, el) => el * acc, 2)).toEqual(2);
  });

  test('direction independent function applied to non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldr((acc, el) => acc + el, 5)).toEqual(15);
  });

  test('direction dependent function applied to non-empty list', () => {
    const list1 = new List([1, 2, 3, 4]);
    expect(list1.foldr((acc, el) => el / acc, 24)).toEqual(9);
  });
});

describe('reverse the elements of a list', () => {
  test('empty list', () => {
    const list1 = new List();
    expect(list1.reverse().values).toEqual([]);
  });

  test('non-empty list', () => {
    const list1 = new List([1, 3, 5, 7]);
    expect(list1.reverse().values).toEqual([7, 5, 3, 1]);
  });

 test('list of lists is not flattened', () => {
   const list1 = new List([[1, 2], [3], [], [4, 5, 6]]);
   console.log(list1.reverse().values);
    expect(list1.reverse().values).toEqual([[4, 5, 6], [], [3], [1, 2]]);
  });
});

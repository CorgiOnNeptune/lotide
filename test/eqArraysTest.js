const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;

describe('#eqArrays', () => {
  it('should return true, given two arrays with equal nubmer values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

  it('should return false, given two arrays of different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('should return true, given two arrays with equal string values', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

  it('should return false, given two arrays of similar values with inequal types', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", 3];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('should return true, given equal primitve values', () => {
    assert.strictEqual(eqArrays('1', '1'), true);
  });

  it('should return true, given two equal nested arrays', () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4]];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

  it('should return false, given two inequal nested arrays', () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4, 5]];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('should return true, given deeper nested arrays', () => {
    const arr1 = [[[[[[[[2], 3], [4]]]]]]];
    const arr2 = [[[[[[[[2], 3], [4]]]]]]];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });
});

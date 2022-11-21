const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe('#flatten', () => {
  it('should return the same array, given an array with no nesting', () => {
    
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it('should remove one level of nesting arrays', () => {
    const arr = [1, 2, [3, 4], 5, [6]];

    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);
  });

  it('should not alter the original array', () => {
    const arr = [1, 2, [3, 4], 5, [6]];
    flatten(arr);

    assert.deepEqual(arr, [1, 2, [3, 4], 5, [6]]);
  });

  it('is unable to remove multiple levels of nesting arrays', () => {
    const arr = [1, 2, [3, [[4, 5]]], 6];

    assert.deepEqual(flatten(arr), [1, 2, 3, [[4, 5]], 6]);
  });
});

const assert = require('chai').assert;
const middle = require('../index').middle;

describe('#middle', () => {

  it('returns an empty array for arrays of length 0', () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns an empty array for arrays of length 1', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns an empty array for arrays of length 2', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns the middle value for arrays of odd length', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns the middle two values for arrays of even length', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

describe('#letterPositions', () => {
  it('should return index [1] for (\'hello world\').e', () => {
    assert.deepEqual(letterPositions('hello world').e, [1]);
  });

  it('should return index [2, 3] for (\'hello\').l', () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });

  it("should return undefined if looking for a ' ' value", () => {
    assert.isUndefined(letterPositions('hello world')[' ']);
  });

  it("should return multiple values if value has multiple occurences", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
  });
});
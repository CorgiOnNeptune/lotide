const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: 'The Express',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  horror: 'Chucky'
};

describe('#findKeyByValue', () => {
  it('should return appropriate key, given its value', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it('should return undefined, given a value not in the object', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'));
  });

  it('should return undefined, given an array', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, ['The Wire', 'Chucky']));
  });

  it('should return undefined, given a non-string value', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, 0));
  });
});
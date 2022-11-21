const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('should return 1 for a single instance of an item', () => {
    assert.strictEqual(result['Jason'], 1);
  });

  it('should return undefined for an item that is to be counted, but isn\'t on allItems', () => {
    assert.isUndefined(result['Karima']);
  });

  it('should return 2 for 2 instances of an item', () => {
    assert.strictEqual(result['Fang'], 2);
  });

  it('should return undefined if the itemToCount value is false, but within allItems', () => {
    assert.isUndefined(result['Agouhanna']);
  });
});
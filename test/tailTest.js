const assert = require('chai').assert;
const tail = require('../tail');

const testArr = ['Hello', 'Lighthouse', 'Labs'];

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello' 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(testArr), ["Lighthouse", "Labs"]);
  });

  it("returns false when comparing tail(testArr[0]) to testArr", () => {
    assert.notDeepEqual(tail(testArr[0]), testArr);
  });

  it("does not alter the original array ", () => {
    tail(testArr);
    assert.strictEqual((testArr.length), 3);
  });
});
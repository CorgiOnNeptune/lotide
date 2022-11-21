const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe('#eqObjects', () => {
  it('should return true, given two objects with equal values', () => {
    const obj1 = { a: '1', b: '2' };
    const obj2 = { b: '2', a: '1' };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return false, given two objects of different lengths', () => {
    const obj1 = { a: '1', b: '2' };
    const obj2 = { a: '1', b: '2', c: '3' };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it('should return true, given two objects with equal array values', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return false, given two objects with inequal array values', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it('should return true, given equal primitve values', () => {
    assert.strictEqual(eqObjects(1, 1), true);
  });

  it('should return true, given two equal nested objects', () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return false, given two inequal nested objects', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it('should return true, given deeper nested objects', () => {
    const obj1 = { a: { y: { l: { P: 6 } }, z: 1 }, b: { c: 6 }, d: 2};
    const obj2 = { a: { y: { l: { P: 6 } }, z: 1 }, b: { c: 6 }, d: 2 };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return true, given deeper nested arrays', () => {
    const obj1 = [[[[[[[[2], 3], [4]]]]]]];
    const obj2 = [[[[[[[[2], 3], [4]]]]]]];
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });
});
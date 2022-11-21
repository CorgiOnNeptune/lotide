const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
  } else {
    return console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❌`);
  }
};

// Test code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc), true;

module.exports = assertObjectsEqual;
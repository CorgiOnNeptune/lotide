const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if objects have the same amount of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  const isObject = (val) => {
    return typeof val === 'object' && !Array.isArray(val);
  };

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // Check if values are arrays. If they are, eqArrays.
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    }

    // Check if values are objects, if they are, recurse.
    if (isObject(value1) && isObject(value2)) {
      if (!eqObjects(value1, value2)) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

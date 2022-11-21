const eqObjects = require('./eqObjects');

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const isObject = (val) => {
    return typeof val === 'object' && !Array.isArray(val);
  };

  for (const key in arr1) {
    const val1 = arr1[key];
    const val2 = arr2[key];

    if (isObject(val1) && isObject(val2)) {
      if (!eqObjects(val1, val2)) {
        return false;
      }
      continue;
    }

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      continue;
    }

    if (val1 !== val2) {
      return false;
    }

  }
  return true;
};

module.exports = eqArrays;
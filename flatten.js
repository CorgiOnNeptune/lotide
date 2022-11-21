const flatten = (arr) => {
  let newArr = [];
  
  for (let value of arr) {
    if (Array.isArray(value)) {
      for (let number of value) {
        newArr.push(number);
      }
    } else {
      newArr.push(value);
    }
  }
  return newArr;
};


// Test results
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
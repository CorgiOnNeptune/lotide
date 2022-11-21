const without = (source, itemsToRemove) => {
  let newArr = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArr.push(item);
    }
  }
  
  return newArr;
};

// Test results
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
// This function will return a "slice of the array with items taken from the beginning."
// It should keep going until the callback returns a truthy value.

const takeUntil = (array, callback) => {
  let results = [];

  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

// test code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;
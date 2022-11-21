const middle = (arr) => {
  let middleArr = [];
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return middleArr;
  }

  // First value of even arr.length
  if (arr.length % 2 === 0) {
    middleArr.push(arr[middleIndex - 1]);
  }

  // Odd arr.length or second value of even arr.length
  if (arr.length % 2 === 1 || arr.length % 2 === 0) {
    middleArr.push(arr[middleIndex]);
  }

  return middleArr;
};

module.exports = middle;
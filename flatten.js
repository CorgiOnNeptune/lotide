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

module.exports = flatten;
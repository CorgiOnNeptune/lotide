const findKeyByValue = (object, value) => {

  // Using Object.keys() with for...of loop
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }

  // Using a for...in loop
  // for (const key in object) {
  //   if (object[key] === value) {
  //     return key;
  //   }
  // }
};

module.exports = findKeyByValue;
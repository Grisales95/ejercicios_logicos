function arrayOfMultiples(num, length) {
  let newArray = [];
  for (let i = 1; i < length + 1; i++) {
    newArray.push(num * i);
  }
  return newArray;
}

module.exports = arrayOfMultiples;

function twoSums(numbs, target) {
  let newArray = [];
  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] + numbs[i + 1] === target) {
      newArray.push(i, i + 1);
    }
  }
  return newArray;
}
module.exports = twoSums;

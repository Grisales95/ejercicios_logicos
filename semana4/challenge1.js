function keysAndValues(objInput) {
  let newArrayKeys = Object.keys(objInput);
  let newArrayValues = Object.values(objInput);
  let newArray3 = [];

  return newArray3.concat([newArrayKeys.sort()], [newArrayValues]);
}

module.exports = keysAndValues;

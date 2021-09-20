function minMax(aNumbs) {
  if (typeof aNumbs !== "object" || aNumbs.length < 2) {
    return false;
  }
  let objNumber = {
    max: Math.max.apply(Math, aNumbs),
    min: Math.min.apply(Math, aNumbs),
  };
  return objNumber;
}

module.exports = minMax;

function isSpecialArray(specialArr) {
  let arrayPares = [];
  let arrayImpares = [];
  for (let i = 0; i < specialArr.length; i += 2) {
    if (specialArr[i] % 2 == 0) {
      arrayPares.push(true);
    } else {
      arrayPares.push(false);
    }
    if (specialArr[i + 1] % 2 !== 0) {
      arrayImpares.push(true);
    } else {
      arrayImpares.push(false);
    }
  }

  var result = "";

  if (
    arrayPares.every((x) => x === true) &&
    arrayImpares.every((x) => x === true)
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

module.exports = isSpecialArray;

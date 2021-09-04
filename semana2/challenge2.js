function divisibleByLeft(n) {
  const numToString = n.toString();
  const newArray = Array.from(numToString);
  const arrayNumber = [];
  newArray.forEach((n) => {
    arrayNumber.push(parseInt(n));
  });
  const arrayBoolean = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % arrayNumber[i - 1] === 0) {
      arrayBoolean.push(true);
    } else arrayBoolean.push(false);
  }
  return arrayBoolean;
}

module.exports = divisibleByLeft;

const reverseInt = (number) => {
  if (number % 1 !== 0 || typeof number !== "number") {
    throw new Error("tipo de dato no admitid0");
  } else {
    number = number + "";
    return parseInt(number.split("").reverse().join("")) * Math.sign(number);
  }
};

module.exports = {
  reverseInt,
};
